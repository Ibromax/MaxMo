import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react"
import ArrowLink from "./components/ArrowLink"
import BrandLogo from "./components/BrandLogo"
import ContactModal from "./components/ContactModal"
import Eyebrow from "./components/Eyebrow"
import Heading from "./components/Heading"
import JournalModal from "./components/JournalModal"
import ProjectModal from "./components/ProjectModal"
import { image, journalEntries, projects, services } from "./data/portfolioData"
import type { JournalEntry, Project } from "./types/portfolio"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedJournal, setSelectedJournal] = useState<JournalEntry | null>(
    null,
  )
  const [contactOpen, setContactOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  // Fluid custom cursor for desktop/fine pointer devices
  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches
    if (!isFinePointer) return

    const onMove = (event: globalThis.MouseEvent) => {
      if (!cursorRef.current) return
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }

    const onHover = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement
      const viewTarget = target.closest("[data-cursor]")
      if (!cursorRef.current) return
      cursorRef.current.dataset.active = viewTarget ? "true" : "false"
      cursorRef.current.textContent =
        viewTarget?.getAttribute("data-cursor") || ""
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onHover)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onHover)
    }
  }, [])

  // Lock body scroll when any overlay/modal is open
  useEffect(() => {
    document.body.classList.toggle(
      "no-scroll",
      Boolean(selectedProject || selectedJournal || contactOpen || menuOpen),
    )
    return () => document.body.classList.remove("no-scroll")
  }, [selectedProject, selectedJournal, contactOpen, menuOpen])

  // Sync hash routing and keyboard navigation
  useEffect(() => {
    const syncFromHash = () => {
      const [, collection, slug] = window.location.hash.split("/")
      setSelectedProject(
        collection === "work"
          ? projects.find((project) => project.slug === slug) || null
          : null,
      )
      setSelectedJournal(
        collection === "journal"
          ? journalEntries.find((entry) => entry.slug === slug) || null
          : null,
      )
      if (window.location.hash === "#enquire") {
        setContactOpen(true)
      }
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        setContactOpen(false)
        setSelectedProject(null)
        setSelectedJournal(null)
        window.history.replaceState({}, "", window.location.pathname)
      }
    }

    syncFromHash()
    window.addEventListener("popstate", syncFromHash)
    window.addEventListener("keydown", closeOnEscape)

    return () => {
      window.removeEventListener("popstate", syncFromHash)
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [])

  const openProject = (
    event: MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    project: Project,
  ) => {
    event.preventDefault()
    setSelectedProject(project)
    window.history.pushState({}, "", `#work/${project.slug}`)
  }

  const openJournal = (
    event: MouseEvent<HTMLAnchorElement>,
    entry: JournalEntry,
  ) => {
    event.preventDefault()
    setSelectedJournal(entry)
    window.history.pushState({}, "", `#journal/${entry.slug}`)
  }

  const closeOverlay = () => {
    setSelectedProject(null)
    setSelectedJournal(null)
    setContactOpen(false)
    window.history.replaceState({}, "", window.location.pathname)
  }

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormSent(true)
  }

  // Find film project for interactive discipline preview
  const filmProject =
    projects.find((item) => item.category.includes("Film")) || projects[3]

  return (
    <div className="site-shell">
      <div className="cursor" ref={cursorRef} aria-hidden="true" />

      {/* Navigation */}
      <nav className="nav" aria-label="Primary navigation">
        <a className="nav__logo" href="#top" aria-label="MAXMO home">
          <BrandLogo />
        </a>
        <div className="nav__status">
          <span className="status-dot" />
          Available for selected projects — 2026
        </div>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
          <a href="#journal">Journal</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          className="nav__menu"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu__top">
            <BrandLogo />
            <button type="button" onClick={() => setMenuOpen(false)}>
              Close
            </button>
          </div>
          <div className="mobile-menu__links">
            {["Work", "Studio", "Journal", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>0{index + 1}</span>
                {item}
              </a>
            ))}
          </div>
          <p>
            Photography & Cinematography
            <br />
            Lagos · Nigeria · Worldwide
          </p>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="hero" id="top">
          <img
            className="hero__image"
            src={image(
              "https://images.unsplash.com/photo-1667329001918-9acbae14dedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=90&w=1080",
              2200,
            )}
            alt="Editorial portrait in sculptural light"
          />
          <div className="hero__veil" />
          <div className="hero__content">
            <Eyebrow light>
              Photography · Cinematography · Visual Direction
            </Eyebrow>
            <Heading level={1} className="hero__title">
              We frame
              <br />
              what words
              <br />
              can’t hold.
            </Heading>
            <div className="hero__bottom">
              <p>
                Visual stories, captured with intention.
                <br />
                Lagos · Nigeria · Worldwide
              </p>
              <ArrowLink href="#work" className="arrow-link--light">
                View selected work
              </ArrowLink>
            </div>
          </div>
          <p className="hero__index">MAXMO / 001</p>
        </section>

        {/* 01: Manifesto */}
        <section className="manifesto section-dark">
          <div className="section-number">01 — Introduction</div>
          <div className="manifesto__content">
            <Heading className="manifesto__heading">
              We don’t just capture moments.
              <br />
              <em>We build images that stay.</em>
            </Heading>
            <div className="manifesto__copy">
              <p>
                MAXMO is a visual storytelling studio creating photographs and
                films with atmosphere, emotion and a lasting point of view.
              </p>
              <p>
                We work across portraiture, fashion, lifestyle, campaigns and
                culture—following the human detail that makes an image
                impossible to forget.
              </p>
            </div>
          </div>
        </section>

        {/* 02: Selected Work */}
        <section className="work section-paper" id="work">
          <div className="work__intro">
            <Eyebrow>02 — Selected work</Eyebrow>
            <Heading className="work__heading">
              A collection of
              <br />
              moments, people
              <br />
              <em>& stories.</em>
            </Heading>
            <p className="work__note">Selected studies / 2026</p>
          </div>

          <div className="project-gallery">
            {projects.map((project, index) => (
              <article
                className={`project project--${index + 1}`}
                key={project.slug}
              >
                <a
                  className="project__image-wrap"
                  href={`#work/${project.slug}`}
                  onClick={(event) => openProject(event, project)}
                  data-cursor="View"
                >
                  <img
                    className="project__image"
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                  />
                  <span className="project__hover">View project</span>
                </a>
                <div className="project__meta">
                  <p className="project__number">0{index + 1}</p>
                  <div>
                    <p className="project__title">{project.title}</p>
                    <p>{project.category}</p>
                  </div>
                  <div>
                    <p>{project.year}</p>
                    <p>{project.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 03: Disciplines */}
        <section className="disciplines section-dark">
          <div className="disciplines__head">
            <Eyebrow light>03 — Still / Moving</Eyebrow>
            <Heading className="disciplines__heading">
              One story.
              <br />
              <em>Two ways of seeing.</em>
            </Heading>
          </div>
          <div className="discipline-grid">
            <article className="discipline">
              <div className="discipline__image-wrap">
                <img
                  src={projects[2].galleryImages[1]}
                  alt="Close editorial portrait"
                  loading="lazy"
                />
              </div>
              <div className="discipline__details">
                <p className="discipline__index">01</p>
                <Heading level={3} className="discipline__title">
                  Photography
                </Heading>
                <p>
                  Portraits · Editorial · Fashion · Lifestyle
                  <br />
                  Events · Commercial
                </p>
              </div>
            </article>
            <article className="discipline discipline--film">
              <div
                className="discipline__image-wrap"
                data-cursor="Play"
                role="button"
                tabIndex={0}
                onClick={(event) => openProject(event, filmProject)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    openProject(event as any, filmProject)
                  }
                }}
              >
                <img
                  src={projects[3].galleryImages[0]}
                  alt="Fashion film still"
                  loading="lazy"
                />
                <span className="film-play" aria-hidden="true">
                  Play film — 00:42
                </span>
              </div>
              <div className="discipline__details">
                <p className="discipline__index">02</p>
                <Heading level={3} className="discipline__title">
                  Cinematography
                </Heading>
                <p>
                  Films · Campaigns · Music Visuals
                  <br />
                  Brand Stories · Documentary
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* 04: The Studio */}
        <section className="studio section-paper" id="studio">
          <div className="studio__lead">
            <Eyebrow>04 — The studio</Eyebrow>
            <Heading className="studio__heading">
              MAXMO is a visual
              <br />
              storytelling studio.
            </Heading>
          </div>
          <div className="studio__portrait">
            <img
              src={image(
                "https://images.unsplash.com/photo-1645997098653-ed4519760b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1080",
              )}
              alt="Creative on set during an editorial shoot"
              loading="lazy"
            />
            <p className="image-caption">On set / In the making</p>
          </div>
          <div className="studio__copy">
            <p className="studio__large-copy">
              We create images with emotion, atmosphere, character and
              intention.
            </p>
            <p>
              From the first treatment to the final frame, MAXMO brings a
              focused editorial eye to every production. Our approach is
              collaborative, observant and always led by the story.
            </p>
          </div>
          <div className="capabilities">
            <Eyebrow>Capabilities</Eyebrow>
            <div className="capabilities__list">
              {services.map((service, index) => (
                <div className="capability" key={service.title}>
                  <span>0{index + 1}</span>
                  <p>{service.title}</p>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05: Journal */}
        <section className="journal section-paper" id="journal">
          <div className="journal__head">
            <Eyebrow>05 — Journal</Eyebrow>
            <Heading className="journal__heading">
              Notes from
              <br />
              <em>behind the frame.</em>
            </Heading>
            <p>Process, observation and the ideas shaping our image-making.</p>
          </div>
          <div className="journal-list">
            {journalEntries.map((entry, index) => (
              <article className="journal-card" key={entry.slug}>
                <a
                  href={`#journal/${entry.slug}`}
                  onClick={(event) => openJournal(event, entry)}
                  data-cursor="Read"
                >
                  <div className="journal-card__image">
                    <img
                      src={entry.coverImage}
                      alt={entry.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="journal-card__meta">
                    <p>0{index + 1}</p>
                    <p>{entry.category}</p>
                    <p>{entry.date}</p>
                  </div>
                  <p className="journal-card__title">{entry.title}</p>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* 06: Selected Collaborations */}
        <section className="collaborations section-dark">
          <Eyebrow light>06 — Selected collaborations</Eyebrow>
          <div className="collaborations__content">
            <Heading className="collaborations__heading">
              Built with people
              <br />
              who believe in
              <br />
              <em>the image.</em>
            </Heading>
            <div className="collaborations__placeholder">
              <p>Client and collaborator list</p>
              <p>Available on request</p>
              <span>
                This area is ready for confirmed brand, artist and agency names.
              </span>
            </div>
          </div>
        </section>

        {/* 07: Start a Project */}
        <section className="contact section-paper" id="contact">
          <Eyebrow>07 — Start a project</Eyebrow>
          <Heading className="contact__heading">
            Have a story
            <br />
            worth <em>framing?</em>
          </Heading>
          <div className="contact__bottom">
            <p>Let’s create something worth remembering.</p>
            <ArrowLink
              href="#enquire"
              onClick={(event) => {
                event.preventDefault()
                setContactOpen(true)
              }}
              className="contact__start"
            >
              Start a project
            </ArrowLink>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__brand">
          <BrandLogo />
          <p>
            Photography & Cinematography
            <br />
            Lagos · Nigeria · Worldwide
          </p>
        </div>
        <div className="footer__links">
          <div>
            <p>Explore</p>
            <a href="#work">Work</a>
            <a href="#studio">Studio</a>
            <a href="#journal">Journal</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <p>Follow</p>
            <a href="#instagram">Instagram</a>
            <a href="#behance">Behance</a>
            <a href="#tiktok">TikTok</a>
            <a href="mailto:hello@maxmo.studio">Email</a>
          </div>
        </div>
        <div className="footer__base">
          <p>© 2026 MAXMO</p>
          <p>Images shown as editable portfolio placeholders</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      {/* Overlays / Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          projectNumber={projects.indexOf(selectedProject) + 1}
          onClose={closeOverlay}
        />
      )}

      {selectedJournal && (
        <JournalModal entry={selectedJournal} onClose={closeOverlay} />
      )}

      {contactOpen && (
        <ContactModal
          formSent={formSent}
          onSubmit={submitEnquiry}
          onClose={closeOverlay}
        />
      )}
    </div>
  )
}

export default App

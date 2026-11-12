import type { Project } from "../types/portfolio"
import BrandLogo from "./BrandLogo"
import Heading from "./Heading"

type ProjectModalProps = {
  project: Project
  projectNumber: number
  onClose: () => void
}

const ProjectModal = ({
  project,
  projectNumber,
  onClose,
}: ProjectModalProps) => {
  return (
    <div
      className="project-page"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="overlay-nav">
        <BrandLogo light={false} />
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>

      <div className="project-page__header">
        <p>Project 0{projectNumber}</p>
        <Heading level={1}>{project.title}</Heading>
        <div className="project-page__facts">
          <p>{project.category}</p>
          <p>
            {project.location}
            <br />
            {project.year}
          </p>
          <p>{project.client}</p>
        </div>
      </div>

      <img
        className="project-page__hero"
        src={project.coverImage}
        alt={project.title}
      />

      <div className="project-page__story">
        <p className="project-page__description">{project.description}</p>
        <p>{project.credits}</p>
      </div>

      <div className="project-page__gallery">
        {project.galleryImages.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`${project.title} view ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>

      <div className="project-page__end">
        <p>End of project</p>
        <button type="button" onClick={onClose}>
          Return to selected work →
        </button>
      </div>
    </div>
  )
}

export default ProjectModal

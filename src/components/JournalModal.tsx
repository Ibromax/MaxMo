import type { JournalEntry } from "../types/portfolio"
import BrandLogo from "./BrandLogo"
import Heading from "./Heading"

type JournalModalProps = {
  entry: JournalEntry
  onClose: () => void
}

const JournalModal = ({ entry, onClose }: JournalModalProps) => {
  return (
    <div
      className="article-page"
      role="dialog"
      aria-modal="true"
      aria-label={entry.title}
    >
      <div className="overlay-nav overlay-nav--dark">
        <BrandLogo />
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>

      <div className="article-page__header">
        <p>
          {entry.category} / {entry.date}
        </p>
        <Heading level={1}>{entry.title}</Heading>
      </div>

      <img
        className="article-page__hero"
        src={entry.coverImage}
        alt={entry.title}
      />

      <div className="article-page__body">
        <p>{entry.body}</p>
        <p>
          In the journal, we share fragments of our process—references,
          locations, moments on set and the questions that remain after the
          image is made.
        </p>
      </div>

      <div className="article-page__gallery">
        {entry.gallery.map((galleryImage, index) => (
          <img
            src={galleryImage}
            alt={`${entry.title} archive ${index + 1}`}
            loading="lazy"
            key={galleryImage}
          />
        ))}
      </div>

      <button className="article-page__close" type="button" onClick={onClose}>
        Return to journal →
      </button>
    </div>
  )
}

export default JournalModal

import type { FormEvent } from "react"
import BrandLogo from "./BrandLogo"
import Eyebrow from "./Eyebrow"
import Heading from "./Heading"

type ContactModalProps = {
  formSent: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onClose: () => void
}

const ContactModal = ({ formSent, onSubmit, onClose }: ContactModalProps) => {
  return (
    <div
      className="enquiry"
      role="dialog"
      aria-modal="true"
      aria-label="Start a project"
    >
      <div className="overlay-nav overlay-nav--dark">
        <BrandLogo />
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>

      {formSent ? (
        <div className="enquiry__thanks">
          <Eyebrow light>Enquiry received</Eyebrow>
          <Heading level={1}>
            Thank you.
            <br />
            <em>We’ll be in touch.</em>
          </Heading>
          <button type="button" onClick={onClose}>
            Return to the studio →
          </button>
        </div>
      ) : (
        <div className="enquiry__layout">
          <div className="enquiry__intro">
            <Eyebrow light>New project</Eyebrow>
            <Heading level={1}>
              Tell us the
              <br />
              <em>story.</em>
            </Heading>
            <p>
              Share the shape of your project. We’ll reply with next steps and
              availability.
            </p>
          </div>
          <form className="enquiry__form" onSubmit={onSubmit}>
            <label>
              <span>Your name</span>
              <input
                name="name"
                type="text"
                placeholder="Name / Studio"
                required
              />
            </label>
            <label>
              <span>Email address</span>
              <input
                name="email"
                type="email"
                placeholder="you@studio.com"
                required
              />
            </label>
            <label>
              <span>What are we making?</span>
              <select name="projectType" defaultValue="">
                <option value="" disabled>
                  Select a project type
                </option>
                <option>Photography</option>
                <option>Cinematography</option>
                <option>Creative direction</option>
                <option>Editorial / Campaign</option>
              </select>
            </label>
            <label>
              <span>Project details</span>
              <textarea
                name="details"
                placeholder="A little about the idea, timing, location and intended use."
                rows={4}
                required
              />
            </label>
            <button type="submit">Send project enquiry →</button>
            <p>Or email hello@maxmo.studio (placeholder address)</p>
          </form>
        </div>
      )}
    </div>
  )
}

export default ContactModal

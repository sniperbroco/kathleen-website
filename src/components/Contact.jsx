import { contact } from '../content'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <h2>{contact.heading}</h2>
        <p>{contact.message}</p>
        <div className="contact-links">
          <a className="btn btn-light" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a
            className="btn btn-outline-light"
            href={contact.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            {contact.linkedinLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

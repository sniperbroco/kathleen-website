import { about } from '../content'

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-label">About Me</h2>
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  )
}

export default About

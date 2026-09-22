import ProfilePhoto from './ProfilePhoto'
import { profile } from '../content'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <ProfilePhoto />
          <p className="hero-kicker">{profile.kicker}</p>
          <h1>{profile.name}</h1>
          <p className="hero-positioning">{profile.positioning}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              See how I work
            </a>
            <a className="btn btn-secondary" href="#contact">
              Get in touch
            </a>
          </div>
          <p className="hero-tools-row">{profile.toolsRow}</p>
        </div>

        <div className="hero-visual">
          <div className="browser-chrome">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="browser-body">
            <p className="hero-visual-label">{profile.heroPreview.label}</p>
            <ul className="hero-visual-list">
              {profile.heroPreview.items.map((item) => (
                <li key={item.text}>
                  <span className={`label-pill ${item.labelClass}`}>{item.label}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

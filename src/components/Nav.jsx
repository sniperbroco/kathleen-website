const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#tools', label: 'Tools' },
]

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          Kathleen Kaye Rostata
        </a>
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary nav-cta" href="#contact">
          Get in touch
        </a>
      </div>
    </header>
  )
}

export default Nav

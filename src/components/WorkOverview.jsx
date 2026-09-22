function WorkOverview({ items }) {
  return (
    <nav className="work-overview" aria-label="Case studies">
      {items.map((cs) => (
        <a key={cs.id} href={`#${cs.id}`} className={`work-tile accent-${cs.accent}`}>
          <span className="work-tile-icon" aria-hidden="true">
            {cs.icon}
          </span>
          <span className="work-tile-number">{cs.number}</span>
          <h4>{cs.title}</h4>
          <p>{cs.tagline}</p>
        </a>
      ))}
    </nav>
  )
}

export default WorkOverview

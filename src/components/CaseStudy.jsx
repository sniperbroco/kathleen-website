import { useEffect, useRef } from 'react'

function CaseStudy({
  id,
  number,
  icon,
  title,
  tagline,
  problem,
  action,
  result,
  tools,
  accent,
  children,
}) {
  const ref = useRef(null)

  // Make WorkOverview tiles (and direct #links) open the matching dropdown.
  useEffect(() => {
    const open = () => {
      if (ref.current) ref.current.open = true
    }
    const onHash = () => {
      if (window.location.hash === `#${id}`) open()
    }
    const onClick = (e) => {
      if (e.target.closest?.(`a[href="#${id}"]`)) open()
    }
    onHash()
    window.addEventListener('hashchange', onHash)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('hashchange', onHash)
      document.removeEventListener('click', onClick)
    }
  }, [id])

  return (
    <details ref={ref} id={id} className={`case-study accent-${accent}`}>
      <summary className="case-study-summary">
        <span className="case-study-number">{number}</span>
        <div className="case-study-summary-text">
          <h3>
            {icon} {title}
          </h3>
          <p className="case-study-tagline">{tagline}</p>
        </div>
        <span className="case-study-chevron" aria-hidden="true">
          ⌄
        </span>
      </summary>

      <div className="case-study-body">
        <div className="case-study-overview">
          <div className="case-study-q">
            <h4>The problem</h4>
            <p>{problem}</p>
          </div>
          <div className="case-study-q">
            <h4>What I did</h4>
            <p>{action}</p>
          </div>
          <div className="case-study-q">
            <h4>The result</h4>
            <p>{result}</p>
          </div>
          <div className="case-study-q">
            <h4>Tools used</h4>
            <p>{tools}</p>
          </div>
        </div>

        <div className="case-study-content">{children}</div>
      </div>
    </details>
  )
}

export default CaseStudy

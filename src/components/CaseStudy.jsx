import ScreenshotSlot from './ScreenshotSlot'

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
  reverse,
  defaultOpen,
  children,
}) {
  return (
    <details id={id} className={`case-study accent-${accent}`} open={defaultOpen}>
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

      <div className={`case-study-body${reverse ? ' reverse' : ''}`}>
        <div className="case-study-grid">
          <div className="case-study-questions">
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

          <div className="case-study-demo">{children}</div>
        </div>

        <div className="case-study-screenshot">
          <p className="demo-caption">Screenshot</p>
          <ScreenshotSlot id={id} label={`${title} screenshot`} />
        </div>
      </div>
    </details>
  )
}

export default CaseStudy

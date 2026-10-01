// Small building blocks shared by the case-study layouts.

export function Block({ title, note, children }) {
  return (
    <section className="cs-block">
      {title && <h4 className="cs-block-title">{title}</h4>}
      {note && <p className="cs-block-note">{note}</p>}
      {children}
    </section>
  )
}

export function Stats({ items }) {
  return (
    <div className="stat-grid">
      {items.map((s) => (
        <div className="stat-tile" key={s.label}>
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

export function Chips({ items, muted }) {
  return (
    <ul className={`chip-list${muted ? ' muted' : ''}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function Stepper({ steps }) {
  return (
    <ol className="stepper">
      {steps.map((step, i) => {
        const title = typeof step === 'string' ? step : step.title
        const detail = typeof step === 'string' ? null : step.detail
        return (
          <li key={title}>
            <span className="stepper-num">{i + 1}</span>
            <div>
              <strong>{title}</strong>
              {detail && <p>{detail}</p>}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

// A comparison table with one highlighted option column.
export function CompareTable({ columns, rows, recommended }) {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Criteria</th>
            {columns.map((c) => (
              <th key={c} className={c === recommended ? 'highlight-col' : undefined}>
                {c}
                {c === recommended && ' ★'}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([criteria, ...cells]) => (
            <tr key={criteria}>
              <th>{criteria}</th>
              {cells.map((cell, i) => (
                <td key={columns[i]} className={columns[i] === recommended ? 'highlight-col' : undefined}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

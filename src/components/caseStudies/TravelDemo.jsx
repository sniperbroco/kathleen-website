import { travelDemoData } from '../../content'

const { caption: CAPTION, rows: ROWS, calloutLabel: CALLOUT_LABEL, calloutText: CALLOUT_TEXT } = travelDemoData

function TravelDemo() {
  return (
    <div className="demo travel-demo">
      <p className="demo-caption">{CAPTION}</p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Option A</th>
              <th>Option B</th>
              <th className="highlight-col">Option C</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th>{row.label}</th>
                <td>{row.a}</td>
                <td>{row.b}</td>
                <td className="highlight-col">{row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="demo-callout">
        <strong>{CALLOUT_LABEL}</strong> {CALLOUT_TEXT}
      </p>
    </div>
  )
}

export default TravelDemo

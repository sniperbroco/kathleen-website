import { travelDemoData } from '../../content'
import { Block, Chips, CompareTable, Stats } from './shared'

const { notionUrl, snapshot, tools, pages, flights, hotels, budget, itinerary, risks, checklist } = travelDemoData

function TravelDemo() {
  return (
    <div className="demo travel-demo">
      <Block title="Project snapshot">
        <div className="table-scroll">
          <table className="wrap-table">
            <tbody>
              {snapshot.map((row) => (
                <tr key={row.label}>
                  <th>{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block title="Tools used">
        <ul className="plain-list">
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Block>

      <Block title="Project pages in Notion">
        <Chips items={pages} />
      </Block>

      <Block title="Flight comparison">
        <CompareTable {...flights} />
        <div className="demo-callout">
          <strong>Recommended: {flights.recommended}.</strong> {flights.callout}
        </div>
      </Block>

      <Block title="Hotel comparison">
        <CompareTable {...hotels} />
        <div className="demo-callout">
          <strong>Recommended: {hotels.recommended}.</strong> {hotels.callout}
        </div>
      </Block>

      <Block title="Budget position">
        <Stats items={budget} />
      </Block>

      <Block title="Executive itinerary">
        <div className="itinerary">
          {itinerary.map((day) => (
            <div className="cs-card" key={day.day}>
              <h5>{day.day}</h5>
              <ol className="timeline">
                {day.items.map((it) => (
                  <li key={`${it.time}-${it.activity}`}>
                    <span className="timeline-time">{it.time}</span>
                    <div>
                      <strong>{it.activity}</strong>
                      <p>
                        {it.place}
                        {it.note && ` · ${it.note}`}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Risk & contingency matrix">
        <div className="table-scroll">
          <table className="wrap-table">
            <thead>
              <tr>
                <th>Potential issue</th>
                <th>Preventive action</th>
                <th>Backup plan</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((r) => (
                <tr key={r.issue}>
                  <th>{r.issue}</th>
                  <td>{r.prevent}</td>
                  <td>{r.backup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block title="EA contingency checklist">
        <ul className="checklist">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Block>

      <Block title="See the real project">
        <p className="cs-text">
          This is the actual Notion workspace I built for the trip, with every page listed above.
        </p>
        <a className="btn btn-primary" href={notionUrl} target="_blank" rel="noopener noreferrer">
          Open in Notion ↗
        </a>
      </Block>
    </div>
  )
}

export default TravelDemo

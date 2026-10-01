import { supportDemoData } from '../../content'
import ScreenshotSlot from '../ScreenshotSlot'
import { Block, Chips, Stats, Stepper } from './shared'

const { dashboardUrl, business, kpis, workflow, categories, tickets, templates } = supportDemoData

const STATUS_TONE = { Open: 'blue', Pending: 'gold', Escalated: 'red', Resolved: 'sage' }
const PRIORITY_TONE = { High: 'red', Medium: 'gold', Low: 'sage' }

function SupportDemo() {
  return (
    <div className="demo support-demo">
      <Block title="Customer Support Dashboard" note={business}>
        <Stats items={kpis} />
        <ScreenshotSlot id="support" label="Customer support dashboard screenshot" carousel />
        <a className="btn btn-primary cs-link" href={dashboardUrl} target="_blank" rel="noopener noreferrer">
          Open the Customer Support Dashboard ↗
        </a>
      </Block>

      <Block title="Workflow">
        <Stepper steps={workflow} />
      </Block>

      <Block title="Support categories">
        <Chips items={categories} muted />
      </Block>

      <Block title="Customer Support Tracker">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Customer</th>
                <th>Issue</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Next action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((row) => (
                <tr key={`${row.date}-${row.customer}`}>
                  <td>{row.date}</td>
                  <td>{row.customer}</td>
                  <td>{row.issue}</td>
                  <td>{row.category}</td>
                  <td>
                    <span className={`priority-pill pill-${PRIORITY_TONE[row.priority]}`}>{row.priority}</span>
                  </td>
                  <td>
                    <span className={`status-pill pill-${STATUS_TONE[row.status]}`}>{row.status}</span>
                  </td>
                  <td>{row.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block title="Response templates" note="Concise, ready-to-customize replies — each with a note on what to check before sending.">
        <div className="template-grid">
          {templates.map((t) => (
            <div className="cs-card template-card" key={t.scenario}>
              <p className="demo-caption">{t.scenario}</p>
              <p className="template-subject">
                <span>Subject</span> {t.subject}
              </p>
              <pre className="template-body">{t.body}</pre>
              <p className="template-note">⚠️ {t.note}</p>
            </div>
          ))}
        </div>
      </Block>
    </div>
  )
}

export default SupportDemo

import { fileOrgDemoData } from '../../content'
import ScreenshotSlot from '../ScreenshotSlot'
import { Block, Stats } from './shared'

const { sheetUrl, driveUrl, kpis, statusSummary, highPriority, tree, files } = fileOrgDemoData

const TONES = {
  Current: 'sage',
  Completed: 'sage',
  'In Progress': 'blue',
  Upcoming: 'blue',
  Pending: 'gold',
  'Needs Review': 'red',
  Archived: 'gray',
}

const MAX_COUNT = Math.max(...statusSummary.map((s) => s.count))

const pill = (status) => `status-pill pill-${TONES[status] ?? 'gray'}`

function FileOrgDemo() {
  return (
    <div className="demo file-demo">
      <Block title="Executive Office File Management Dashboard">
        <Stats items={kpis} />
        <div className="two-col">
          <div className="cs-card">
            <p className="demo-caption">Status summary</p>
            <ul className="bar-list">
              {statusSummary.map((s) => (
                <li key={s.status}>
                  <span>{s.status}</span>
                  <span className="bar-track">
                    <span className="bar-fill" style={{ width: `${(s.count / MAX_COUNT) * 100}%` }} />
                  </span>
                  <b>{s.count}</b>
                </li>
              ))}
            </ul>
          </div>
          <div className="cs-card">
            <p className="demo-caption">High-priority items</p>
            <ul className="priority-files">
              {highPriority.map((f) => (
                <li key={f.file}>
                  <span>{f.file}</span>
                  <span className={pill(f.status)}>{f.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Block>

      <Block title="Google Drive structure">
        <pre className="folder-tree">{tree}</pre>
      </Block>

      <Block title="File index & quick-access tracker" note="A sample of the 28 tracked files.">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>File name</th>
                <th>Category</th>
                <th>Type</th>
                <th>Updated</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Confidentiality</th>
              </tr>
            </thead>
            <tbody>
              {files.map((row) => (
                <tr key={row.file}>
                  <td>{row.file}</td>
                  <td>{row.category}</td>
                  <td>{row.type}</td>
                  <td>{row.updated}</td>
                  <td>
                    <span className={pill(row.status)}>{row.status}</span>
                  </td>
                  <td>
                    <span className={`priority-pill pill-${row.priority === 'High' ? 'red' : 'sage'}`}>
                      {row.priority}
                    </span>
                  </td>
                  <td>{row.confidentiality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block title="Google Drive" note="Swipe or use the arrows to browse.">
        <ScreenshotSlot id="drive" label="Google Drive screenshot" carousel />
        <a className="btn btn-primary cs-link" href={driveUrl} target="_blank" rel="noopener noreferrer">
          Open the Google Drive folder ↗
        </a>
      </Block>

      <Block title="Google Sheets" note="Swipe or use the arrows to browse.">
        <ScreenshotSlot id="files" label="Google Sheets screenshot" carousel />
        <a className="btn btn-primary cs-link" href={sheetUrl} target="_blank" rel="noopener noreferrer">
          Open the Google Sheet ↗
        </a>
      </Block>
    </div>
  )
}

export default FileOrgDemo

import { inboxDemoData } from '../../content'
import ScreenshotSlot from '../ScreenshotSlot'
import { Block } from './shared'

const { labels: LABELS, emails: EMAILS } = inboxDemoData

function InboxDemo() {
  return (
    <div className="demo inbox-demo">
      <Block title="The system — 7 labels">
        <div className="table-scroll">
          <table className="wrap-table">
            <thead>
              <tr>
                <th>Label</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {LABELS.map((label) => (
                <tr key={label.name}>
                  <td>
                    <span className={`label-pill ${label.className}`}>
                      {label.emoji} {label.name}
                    </span>
                  </td>
                  <td>{label.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block title="Before and after">
        <div className="inbox-columns">
          <div className="cs-card">
            <p className="demo-caption">Before — {EMAILS.length} unread, one flat list</p>
            <ul className="inbox-list plain">
              {EMAILS.map((email) => (
                <li key={email.subject}>{email.subject}</li>
              ))}
            </ul>
          </div>
          <div className="cs-card">
            <p className="demo-caption">After — labeled &amp; scannable</p>
            <ul className="inbox-list">
              {EMAILS.map((email) => (
                <li key={email.subject}>
                  <span className="inbox-pills">
                    {email.labels.map((i) => (
                      <span key={i} className={`label-pill ${LABELS[i].className}`}>
                        {LABELS[i].emoji} {LABELS[i].name}
                      </span>
                    ))}
                  </span>
                  {email.subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Block>

      <Block title="In Gmail">
        <ScreenshotSlot
          id="inbox"
          label="Inbox screenshot"
          carousel
          captions={['Before — 13 unread, unsorted', 'After — every email labeled']}
        />
      </Block>
    </div>
  )
}

export default InboxDemo

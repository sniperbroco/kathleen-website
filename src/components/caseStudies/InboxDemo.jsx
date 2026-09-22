import { inboxDemoData } from '../../content'

const { labels: LABELS, before: BEFORE, after: AFTER_RAW } = inboxDemoData
const AFTER = AFTER_RAW.map((item) => ({ ...item, label: LABELS[item.labelIndex] }))

function InboxDemo() {
  return (
    <div className="demo inbox-demo">
      <div className="inbox-columns">
        <div>
          <p className="demo-caption">Before — 15 unread, flat list</p>
          <ul className="inbox-list plain">
            {BEFORE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="demo-caption">After — labeled &amp; scannable</p>
          <ul className="inbox-list">
            {AFTER.map((item) => (
              <li key={item.text}>
                <span className={`label-pill ${item.label.className}`}>
                  {item.label.emoji} {item.label.name}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="label-key">
        {LABELS.map((label) => (
          <span key={label.name} className={`label-pill ${label.className}`}>
            {label.emoji} {label.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default InboxDemo

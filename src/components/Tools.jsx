import { FaSlack, FaAddressCard, FaBullhorn } from 'react-icons/fa'
import {
  SiGoogle,
  SiGmail,
  SiGooglecalendar,
  SiGoogledrive,
  SiGooglesheets,
  SiNotion,
  SiZapier,
  SiMake,
  SiClickup,
  SiAsana,
  SiHubspot,
  SiClaude,
} from 'react-icons/si'
import { tools } from '../content'

const ICONS = {
  'Google Workspace': SiGoogle,
  Gmail: SiGmail,
  'Google Calendar': SiGooglecalendar,
  'Google Drive': SiGoogledrive,
  'Google Sheets': SiGooglesheets,
  Slack: FaSlack,
  Notion: SiNotion,
  Zapier: SiZapier,
  Make: SiMake,
  'CRM tools': FaAddressCard,
  ClickUp: SiClickup,
  Asana: SiAsana,
  HubSpot: SiHubspot,
  Claude: SiClaude,
  GoHighLevel: FaBullhorn,
}

function Tools() {
  return (
    <section id="tools" className="tools">
      <h2 className="section-label">Tools</h2>
      <div className="tools-columns">
        <div>
          <h3>Tools I&apos;ve practiced</h3>
          <ul className="tag-list">
            {tools.practiced.map((name) => {
              const Icon = ICONS[name]
              return (
                <li key={name}>
                  {Icon && <Icon aria-hidden="true" />}
                  {name}
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h3>Currently learning</h3>
          <ul className="tag-list muted">
            {tools.learning.map((name) => {
              const Icon = ICONS[name]
              return (
                <li key={name}>
                  {Icon && <Icon aria-hidden="true" />}
                  {name}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Tools

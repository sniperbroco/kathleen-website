import { sopDemoData } from '../../content'
import ScreenshotSlot from '../ScreenshotSlot'
import { Block } from './shared'

const { notionUrl: NOTION_URL, title: TITLE, purpose: PURPOSE, steps: STEPS, tools: TOOLS } = sopDemoData

function SopDemo() {
  return (
    <div className="demo sop-demo">
      <div className="sop-card">
        <p className="demo-caption">{TITLE}</p>
        <p className="sop-purpose">
          <strong>Purpose:</strong> {PURPOSE}
        </p>
        <ol className="sop-steps">
          {STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="sop-tools">
          <strong>Tools used:</strong> {TOOLS}
        </p>
      </div>
      <Block title="In Notion" note="Swipe or use the arrows to browse.">
        <ScreenshotSlot id="sop" label="SOP screenshot" carousel />
        <a className="btn btn-primary cs-link" href={NOTION_URL} target="_blank" rel="noopener noreferrer">
          Open the SOP in Notion ↗
        </a>
      </Block>
    </div>
  )
}

export default SopDemo

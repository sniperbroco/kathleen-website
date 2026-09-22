import { sopDemoData } from '../../content'

const { title: TITLE, purpose: PURPOSE, steps: STEPS, tools: TOOLS } = sopDemoData

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
    </div>
  )
}

export default SopDemo

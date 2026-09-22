import { automationDemoData } from '../../content'

const { caption: CAPTION, steps: STEPS } = automationDemoData

function AutomationDemo() {
  return (
    <div className="demo automation-demo">
      <p className="demo-caption">{CAPTION}</p>
      <div className="flow">
        {STEPS.map((step, i) => (
          <div className="flow-step-wrap" key={step.title}>
            <div className="flow-step">
              <span className="flow-step-num">{i + 1}</span>
              <div>
                <p className="flow-step-title">{step.title}</p>
                <p className="flow-step-detail">{step.detail}</p>
              </div>
            </div>
            {i < STEPS.length - 1 && <span className="flow-arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AutomationDemo

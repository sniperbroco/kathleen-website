import { taskDemoData } from '../../content'
import ScreenshotSlot from '../ScreenshotSlot'
import { Block, Chips, Stepper } from './shared'

const { taskTrackerUrl, projectTrackerUrl, skills, taskViews, projectViews, tasks, projects, checkpoint } = taskDemoData

const PRIORITY_TONE = { Urgent: 'red', High: 'gold', Medium: 'blue', Low: 'sage' }

function TaskDemo() {
  return (
    <div className="demo task-demo">
      <Block title="Client">
        <p className="cs-text">
          <strong>Mia Santos</strong> (fictional small business owner) — managing multiple clients, operations,
          finances, marketing activities, and business projects.
        </p>
        <Chips items={skills} muted />
      </Block>

      <Block title="Executive Task Tracker">
        <Chips items={taskViews} muted />
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Due</th>
                <th>Follow-up</th>
                <th>Assigned to</th>
                <th>Flag</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((row) => (
                <tr key={row.task}>
                  <td>{row.task}</td>
                  <td>
                    <span className={`priority-pill pill-${PRIORITY_TONE[row.priority]}`}>{row.priority}</span>
                  </td>
                  <td>
                    <span className={`status-pill pill-${row.tone}`}>{row.status}</span>
                  </td>
                  <td>{row.due}</td>
                  <td>{row.followUp}</td>
                  <td>{row.owner}</td>
                  <td>
                    {row.flag && (
                      <span className={`status-pill pill-${row.flag === 'Overdue' ? 'red' : 'gold'}`}>
                        {row.flag}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ScreenshotSlot id="tasks" label="Task tracker screenshot" carousel />
        <a className="btn btn-primary cs-link" href={taskTrackerUrl} target="_blank" rel="noopener noreferrer">
          Open the Task Tracker in Notion ↗
        </a>
      </Block>

      <Block title="Executive Project Tracker">
        <Chips items={projectViews} muted />
        <div className="project-grid">
          {projects.map((p) => (
            <div className="cs-card project-card" key={p.name}>
              <div className="project-head">
                <strong>{p.name}</strong>
                <span className={`status-pill pill-${p.tone}`}>{p.status}</span>
              </div>
              <div className="progress">
                <span className="progress-track">
                  <span className="progress-fill" style={{ width: `${p.progress}%` }} />
                </span>
                <b>{p.progress}%</b>
              </div>
              <p className="project-next">
                <span>Next action</span> {p.next}
              </p>
              <p className="project-meta">
                <span className={`priority-pill pill-${PRIORITY_TONE[p.priority]}`}>{p.priority}</span>
                Due {p.deadline} · {p.lead}
              </p>
            </div>
          ))}
        </div>
        <ScreenshotSlot id="projects" label="Project tracker screenshot" carousel />
        <a className="btn btn-primary cs-link" href={projectTrackerUrl} target="_blank" rel="noopener noreferrer">
          Open the Project Tracker in Notion ↗
        </a>
      </Block>

      <Block title="Workflow checkpoint" note="Every task follows the same path, so nothing stalls unnoticed.">
        <Stepper steps={checkpoint} />
      </Block>
    </div>
  )
}

export default TaskDemo

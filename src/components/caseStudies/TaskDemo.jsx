import { taskDemoData } from '../../content'

const { tasks: TASKS } = taskDemoData

function TaskDemo() {
  return (
    <div className="demo task-demo">
      <p className="demo-caption">Executive Task Dashboard</p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Owner</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Next Action</th>
            </tr>
          </thead>
          <tbody>
            {TASKS.map((row) => (
              <tr key={row.task}>
                <td>{row.task}</td>
                <td>
                  <span className={`priority-pill priority-${row.priority.toLowerCase()}`}>{row.priority}</span>
                </td>
                <td>{row.owner}</td>
                <td>{row.deadline}</td>
                <td>
                  <span className={`status-pill status-${row.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {row.status}
                  </span>
                </td>
                <td>{row.next}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TaskDemo

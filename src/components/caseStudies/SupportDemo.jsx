import { supportDemoData } from '../../content'

const { tickets: TICKETS } = supportDemoData

function SupportDemo() {
  return (
    <div className="demo support-demo">
      <p className="demo-caption">Customer Support Tracker</p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Issue</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Next Action</th>
            </tr>
          </thead>
          <tbody>
            {TICKETS.map((row) => (
              <tr key={`${row.date}-${row.customer}`}>
                <td>{row.date}</td>
                <td>{row.customer}</td>
                <td>{row.issue}</td>
                <td>
                  <span className={`priority-pill priority-${row.priority.toLowerCase()}`}>{row.priority}</span>
                </td>
                <td>
                  <span className={`status-pill status-${row.status.toLowerCase()}`}>{row.status}</span>
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

export default SupportDemo

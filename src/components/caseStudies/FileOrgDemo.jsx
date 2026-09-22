import { fileOrgDemoData } from '../../content'

const { caption: CAPTION, tree: TREE, files: FILES } = fileOrgDemoData

function FileOrgDemo() {
  return (
    <div className="demo fileorg-demo">
      <p className="demo-caption">{CAPTION}</p>
      <pre className="folder-tree">{TREE}</pre>

      <p className="demo-caption">File index</p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>File</th>
              <th>Category</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {FILES.map((row) => (
              <tr key={row.file}>
                <td>{row.file}</td>
                <td>{row.category}</td>
                <td>{row.owner}</td>
                <td>
                  <span className={`status-pill status-${row.status.toLowerCase()}`}>{row.status}</span>
                </td>
                <td>{row.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FileOrgDemo

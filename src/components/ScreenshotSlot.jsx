import { useState } from 'react'

function ScreenshotSlot({ id, label }) {
  const [broken, setBroken] = useState(false)
  const src = `/screenshots/${id}.png`

  if (broken) {
    return (
      <div className="screenshot-slot placeholder">
        <span className="screenshot-icon" aria-hidden="true">
          🖼️
        </span>
        <p>Drop a real screenshot here</p>
        <code>public/screenshots/{id}.png</code>
      </div>
    )
  }

  return (
    <div className="screenshot-slot">
      <img src={src} alt={label} onError={() => setBroken(true)} />
    </div>
  )
}

export default ScreenshotSlot

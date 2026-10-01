import { useEffect, useRef, useState } from 'react'

const MAX_SCREENSHOTS = 10

// Looks for public/screenshots/{id}.png, {id}2.png, {id}3.png, ... and stops
// at the first one that is missing.
function loadScreenshots(id, start, count, isCancelled, onFound, onDone) {
  const last = Math.min(start + count - 1, MAX_SCREENSHOTS)
  const tryNext = (n) => {
    if (isCancelled() || n > last) return onDone()
    const src = `/screenshots/${id}${n === 1 ? '' : n}.png`
    const img = new Image()
    img.onload = () => {
      if (isCancelled()) return
      onFound(src)
      tryNext(n + 1)
    }
    img.onerror = onDone
    img.src = src
  }
  tryNext(start)
}

// `captions` is optional: captions[i] labels the i-th image shown.
// `carousel` shows the images as a swipeable slideshow instead of a stacked list.
// `start`/`count` pick a range of the numbered files (e.g. start 2, count 3 = {id}2..{id}4).
function ScreenshotSlot({ id, label, captions = [], start = 1, count = MAX_SCREENSHOTS, carousel = false }) {
  const trackRef = useRef(null)
  const [sources, setSources] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    loadScreenshots(
      id,
      start,
      count,
      () => cancelled,
      (src) => setSources((prev) => [...prev, src]),
      () => !cancelled && setLoading(false),
    )
    return () => {
      cancelled = true
    }
  }, [id, start, count])

  if (!sources.length) {
    if (loading) return null
    return (
      <figure className="screenshot-slot placeholder">
        <span className="screenshot-icon" aria-hidden="true">
          🖼️
        </span>
        <p>{captions[0] || 'Drop a real screenshot here'}</p>
        <code>public/screenshots/{id}{start === 1 ? '' : start}.png</code>
      </figure>
    )
  }

  if (carousel && sources.length > 1) {
    const scrollBy = (dir) => {
      const el = trackRef.current
      if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
    }
    return (
      <div className="screenshot-carousel">
        <div className="carousel-track" ref={trackRef} tabIndex={0} aria-label={`${label} slideshow`}>
          {sources.map((src, i) => (
            <figure className="screenshot-slot carousel-slide" key={src}>
              <img src={src} alt={captions[i] || `${label} ${i + 1}`} />
              <figcaption>{captions[i] || `${i + 1} / ${sources.length}`}</figcaption>
            </figure>
          ))}
        </div>
        <button type="button" className="carousel-btn prev" onClick={() => scrollBy(-1)} aria-label="Previous screenshot">
          ‹
        </button>
        <button type="button" className="carousel-btn next" onClick={() => scrollBy(1)} aria-label="Next screenshot">
          ›
        </button>
      </div>
    )
  }

  return (
    <div className="screenshot-gallery">
      {sources.map((src, i) => (
        <figure className="screenshot-slot" key={src}>
          <img src={src} alt={captions[i] || (sources.length > 1 ? `${label} ${i + 1}` : label)} />
          {captions[i] && <figcaption>{captions[i]}</figcaption>}
        </figure>
      ))}
    </div>
  )
}

export default ScreenshotSlot

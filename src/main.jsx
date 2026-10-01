import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Always load at the hero: stop the browser restoring an old scroll position
// (it lands on the wrong spot once the case studies change height).
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
if (window.location.hash) window.history.replaceState(null, '', window.location.pathname + window.location.search)
window.scrollTo(0, 0)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

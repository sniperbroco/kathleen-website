function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Kathleen Kaye Rostata</p>
        <span className="footer-divider" aria-hidden="true">
          •
        </span>
        <p className="footer-credit">Created using Claude</p>
      </div>
    </footer>
  )
}

export default Footer

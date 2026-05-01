import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="footer-bracket">[</span>
            ATHARVA KEVAL
            <span className="footer-bracket">]</span>
          </div>
          <div className="footer-meta">B.Tech CSE · Sanjivani College · Kopargaon</div>
        </div>
        <div className="footer-right">
          <div className="footer-meta">© 2026 — Built with React, Vite & Framer Motion</div>
          <div className="footer-meta">v1.0.0 · Last deployed: today</div>
        </div>
      </div>
    </footer>
  )
}

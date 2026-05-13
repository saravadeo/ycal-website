import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { GITHUB_REPO_URL, GOOGLE_PLAY_URL } from '../config'
import { applyDocumentMeta } from '../seo/documentMeta'
import { HOME_JSON_LD } from '../seo/jsonLd'

const JSON_LD_SCRIPT_ID = 'ycal-jsonld-home'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    applyDocumentMeta(pathname)

    if (pathname !== '/') {
      document.getElementById(JSON_LD_SCRIPT_ID)?.remove()
      return
    }

    let script = document.getElementById(JSON_LD_SCRIPT_ID) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = JSON_LD_SCRIPT_ID
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(HOME_JSON_LD)
  }, [pathname])

  return (
    <div className="layout">
      <header className="site-header">
        <Link className="brand" to="/">
          <img src={`${import.meta.env.BASE_URL}icon.png`} alt="" width={40} height={40} />
          <span>YCal</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <NavLink className="nav-link" to="/" end>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/privacy">
            Privacy
          </NavLink>
          <NavLink className="nav-link" to="/terms">
            Terms
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-links">
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/terms">Terms of use</Link>
          <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
            Google Play
          </a>
          {GITHUB_REPO_URL ? (
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
        <p>YCal is an independent, free app. Not affiliated with Yahoo.</p>
      </footer>
    </div>
  )
}

import * as React from 'react'
import "@fontsource/ibm-plex-mono";
import { Link } from 'gatsby'
import {
  container,
  inputToggler,
  menuToggler,
  menuOpen, 
  menuClose,
  bigNav,
  navLinks,
  navLinkItem,
  navLinkText,
  pageName,
  footer,
  footerNav,
  year
} from './layout.module.scss'



const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className={container}>
        <title>{pageTitle}</title>
        <h1 className={pageName}>{pageTitle}</h1>
        <input type="checkbox" id="menuToggler" className={inputToggler}/>
        <label htmlFor="menuToggler" className={menuToggler}><span className={menuOpen}>Menu</span><span className={menuClose}>Close</span></label>
        <nav className={bigNav}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/store" className={navLinkText}>
                Store
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/support" className={navLinkText}>
                Support
              </Link>
            </li>            
            <li className={navLinkItem}>
              <Link to="/mastering" className={navLinkText}>
                Mastering
              </Link>
            </li> 
            <li className={navLinkItem}>
              <Link to="/resources" className={navLinkText}>
                Resources
              </Link>
            </li> 
            <li className={navLinkItem}>
              <Link to="/network" className={navLinkText}>
                Network
              </Link>
            </li>         
          </ul>
        </nav>
        {children}
      </div>
      <div className={container}>
        <footer className={footer}>
          <div className={year}>2022.London</div>
          <ul className={footerNav}>
            <li><a href="https://github.com/sm-ll/samples">Github</a></li>
            <li><Link to="/merge">Demos</Link></li>
            <li><Link to="/privacy-policy">Privacy</Link></li>
            <li><Link to="/merge">Contact</Link></li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default Layout
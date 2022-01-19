import * as React from 'react'
import "normalize.css"
import { Link } from 'gatsby'
import {
  container,
  heading,
  inputToggler,
  menuToggler,
  menuTogglerSquare,  
  bigNav,
  navLinks,
  navLinkItem,
  navLinkText,
  content
} from './layout.module.scss'



const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <input type="checkbox" id="menuToggler" className={inputToggler}/>
      <label htmlFor="menuToggler" className={menuToggler}> <span className={menuTogglerSquare}></span></label>      
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
            <Link to="/cause-and-condition" className={navLinkText}>
              Cause and Condition
            </Link>
          </li> 
          <li className={navLinkItem}>
            <Link to="/resources" className={navLinkText}>
              Resources
            </Link>
          </li> 
          <li className={navLinkItem}>
            <Link to="/merge" className={navLinkText}>
              Merge
            </Link>
          </li>         
        </ul>
      </nav>
      <main className={content}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
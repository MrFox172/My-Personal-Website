import React from 'react'
import logo from '../../logo.svg'
import './NavBar.css'

function NavBar() {
  return (
    <div className="navigation">
      <img src={logo}/>
      <span>
        <a href="/" className="navigationPadding">Home</a>
        <a href="/projects" className="navigationPadding">Projects</a>
        <a href="/resume" className="navigationPadding">Resume</a>
      </span>
    </div>
  )
}

export default NavBar
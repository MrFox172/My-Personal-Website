import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../logo.png'
import './NavBar.css'

function NavBar() {
  const home = "{Home}"
  const projects = "{Projects}"
  const resume = "{Resume}"
  const navigate = useNavigate();

  const goHome = () =>
  {
    navigate("/");
  }

  return (
    <div className="navigation">
      <div className="navigationLeft"><img src={logo} onClick={goHome}/></div>
      <div className="navigationRight">
      <span>
        <a href="/" className="navigationPadding">{home}</a>
        <a href="/projects" className="navigationPadding">{projects}</a>
        <a href="/resume" className="navigationPadding">{resume}</a>
      </span>
      </div>
    </div>
  )
}

export default NavBar
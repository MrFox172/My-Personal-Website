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
      <img src={logo} onClick={goHome}/>
      <span>
        <a href="/" className="navigationPadding">{home}</a>
        <a href="/projects" className="navigationPadding">{projects}</a>
        <a href="/resume" className="navigationPadding">{resume}</a>
      </span>
    </div>
  )
}

export default NavBar
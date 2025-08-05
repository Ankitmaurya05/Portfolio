import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Css/Navbar.css"
import git from "../assets/github.png"
import Lnk from "../assets/Lnk.png"

const Navbar = () => {
  return (
    <nav>
      <header>
        <div className='sidelogo'>
          <span >Ankit Maurya</span>
        </div>
        <div className='AllLink'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Skill">Skill</NavLink>
          <NavLink to="/Educations">Educations</NavLink>
          <NavLink to="/Project">Project</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
        <div >
          <a href="https://github.com/Ankumaurya07" target="_blank"><img src={git} alt=""/></a>
        <a href="https://www.linkedin.com/in/mauryaankit9537/" target="_blank"><img src={Lnk} alt=""/></a>
        </div>
      </header>
    </nav>
  )
}

export default Navbar

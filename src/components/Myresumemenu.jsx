import React from 'react'
import{ NavLink } from "react-router-dom";
// import{ NavLink } from "react-dom";
import "./scss/leftmenu.scss";


const Myresumemenu = () => {
  return (
    <div className='resumemenu-div'>
      <h4>6 months of experience</h4>
      <h1>my resume</h1>

      <div className="resume-menu">
        <NavLink to='/'>Education</NavLink>
        <NavLink to='/skills'>Skills</NavLink>
        <NavLink to='/experience'>experience</NavLink>
      </div>
    </div>
  )
}

export default Myresumemenu

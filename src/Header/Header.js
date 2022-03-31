import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaTimes } from 'react-icons/fa'
import { MdOutlineMenu } from 'react-icons/md'

export const Header = () => {

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
 




  return (
    <div className='header'>
      <div className='title'>
        <h1>RealEstate<span>Company</span></h1>
      </div>

      <nav className='nav-links' ref={navRef}>
        <Link to='/'>HOME</Link>
        <a href='#about'>ABOUT</a>
        <a href='#agents'>AGENTS</a>
        <Link to='/properties'><span>PROPERTIES</span></Link>
        <button onClick={showNavbar} className='nav-btn nav-close-btn'><FaTimes/></button>
      </nav>

      <button className='nav-btn' onClick={showNavbar}>
        <MdOutlineMenu/>
      </button>

        
                
    </div>
            




  )
}

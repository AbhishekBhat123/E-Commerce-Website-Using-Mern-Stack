import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import OIP from '../../assets/OIP.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className='nav-logo'/>
        <img src={ OIP} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
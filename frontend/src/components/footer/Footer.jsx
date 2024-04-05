import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt=''width="200px"/>
        <p>MARRY ME</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved by Dhruvi Lad</p>
      </div>
    </div>
  )
}

export default Footer

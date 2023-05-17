import React from 'react'
import './Footer.css'
import FooterLinks from './FooterLinks'
import SocialLinks from './SocialLinks'
const Footer = () => {
  return (
    <footer className='box'>
        <div className="sociallinks">
            <SocialLinks/>
        </div>
        <FooterLinks/>
    </footer>
  )
}

export default Footer

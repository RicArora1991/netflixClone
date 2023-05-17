import React from 'react'
import './SocialLinks.css'
import InstagramIcon from './InstagramIcon'
import FacebookIcon from './FacebookIcon'
import YoutubeIcon from './YoutubeIcon'
import TwitterIcon from './TwitterIcon'
const SocialLinks = () => {
  return (
    <div className='box'>
        <a href="fb.com" className='iconLink'><FacebookIcon/></a>
        <a href="instagram.com" className='iconLink'><InstagramIcon/></a>
        <a href="twitter.com" className='iconLink'><TwitterIcon/></a>
        <a href="youtube.com" className='iconLink'><YoutubeIcon/></a>

    </div>
  )
}

export default SocialLinks

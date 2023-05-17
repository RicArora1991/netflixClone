import React from 'react'
import './Footerlinks.css'
const FooterLinks = () => {
    const links=[ 'Audio and Subtitles',
    'Audio Description',
    'Help Center',
    'Gift Cards',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Terms of Use',
    'Privacy',
    'Legal Notice',
    'Cookie Preferences',
    'Impressum',
    'Contact Us',]
  return (
    <div>
      <ul className='linksList'>
        {links.map(link=>(
            <li className='link' key={link}>
                <a href="/">{link}</a>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks

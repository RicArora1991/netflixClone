import React from 'react'
import './Navigation.css'
const Navigartion = () => {
    const navItems=['Home', 'TV Shows', 'Movies','New & Popular' ,'My List']
  return (
    <div className='navigation'>
    
        <div className="mainNavigation">
            <ul className='navigationList'>
            {navItems.map(item=>(
                <li className='navigationItem' key={item}>

                    <a href="/">{item}</a>
                </li>
            ))}

            </ul>
        </div>
      
      
    </div>
  )
}

export default Navigartion

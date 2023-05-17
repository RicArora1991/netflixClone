import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Navigartion from './Navigartion'


const Navbar = () => {
    // const[show, setShow]=useState(false)
    // useEffect(()=>{
    //     window.addEventListener('scroll',()=>{
    //         if(window.scrollY>100){
    //             setShow(true)
    //         }else{
    //             setShow(false)
    //         }
    //     });
    //     return()=>{window.removeEventListener('scroll',null)}
    // },[])
  return (
    <div className="navbar">
        <Navigartion/>
      <img className='nav__logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix" />
        <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
    </div>
  )
}

export default Navbar

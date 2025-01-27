
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
 
const SmoothScroll = () => (
  <div>
    <AnchorLink href='#things'>Things</AnchorLink>
    <AnchorLink href='#stuff'>Stuff</AnchorLink>
 
    <section id='things'>
      <h2>Things</h2>
    </section>
    <section id='stuff'>
      <h2>Stuff</h2>
    </section>
  </div>
)
 

import React, { useState,useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import underline from '../../assets/underline.png'
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'
const Navbar = () => {

  const[menu,setMenu]=useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img  src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
        <ul ref={menuRef}  className='nav-menu'>
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home' ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#journey'><p onClick={()=>setMenu("journey")}>Journey</p></AnchorLink>{menu==="journey"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>My Work</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Connect With Me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar
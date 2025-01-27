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
 

import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile_pic.jpeg'

const Hero = () => {
  return (
    <div id='home'  className='hero'>
        <img src={profile_pic} alt="" />
        <h1><span>I'm Pushkar Singh,</span> web developer based in India.</h1>
        <p>I am a Computer Science Engineering student passionate about AI, backend development, and creating impactful solutions.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
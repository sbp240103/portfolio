import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/profile_img.png'
const About = () => {
  return (
    <div id='about'  className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I have experience developing projects in web development and applying data structures and algorithms to build efficient solutions.</p>
                    <p>I am passionate about using technology to solve real-world problems and create impactful solutions.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width : "50%"}}/></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width : "%"}}/></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width : "25%"}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width : "70%"}}/></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width : "50%"}}/></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width : "%"}}/></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width : "25%"}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width : "70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>250+</h1>
                <p>LEETCODE PROBLEMS SOLVED</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About
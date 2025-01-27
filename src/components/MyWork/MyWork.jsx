import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.png'
import project1_img from '../../assets/project1_img.jpg'
import project2_img from '../../assets/project2_img.jpg'
import project3_img from '../../assets/project3_img.png'
import project4_img from '../../assets/project4_img.jpg'
function MyWork() {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        <img src={project1_img} alt="" />
        <img src={project2_img} alt="" />
        <img src={project3_img} alt="" />
        <img src={project4_img} alt="" />
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
      </div>
    </div>
  )
}

export default MyWork
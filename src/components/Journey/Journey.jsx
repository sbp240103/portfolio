import React from 'react'
import './Journey.css'
import arrow from '../../assets/arrow.jpg'
import jnv from '../../assets/jnv.jpg'
import mbm from '../../assets/mbm.png'
import ncc from '../../assets/ncc.png'
import sarda from '../../assets/sarda.jpg'
const Journey = () => {
  return (

    <div id='journey'  className='journey'>
        <div className="heading">
          <h1>JOURNEY</h1>
          <br />
          <img src={arrow} alt="" />
        </div>
        <div className="timeline">
          <div className="container left-container">
            <img src={sarda} alt="" />
            <div className="text-box">
              <h2>SHARDA SCHOOL, BAGANA</h2>
              <small>2008 - 2014</small>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
            </div>
          </div>

          <div className="container right-container">
            <img src={jnv} alt="" />
            <div className="text-box">
              <h2>JNV RAJSAMAND</h2>
              <small>2014 - 2021</small>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
            </div>
          </div>

          <div className="container left-container">
            <img src={mbm} alt="" />
            <div className="text-box">
              <h2>MBM UNIVERSITY, JODHPUR</h2>
              <small>2022 - 2026</small>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
            </div>
          </div>

          <div className="container right-container">
            <img src={ncc} alt="" />
            <div className="text-box">
              <h2>NATIONAL CADET CORPS</h2>
              <small>2022 - 2025</small>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
              <p>1. Journey Template found in: Quarterly milestones roadmap .</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Journey
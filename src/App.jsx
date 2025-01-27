import React from 'react'

import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Journey from './components/Journey/Journey'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Journey/>
      <MyWork/>
      <Contact/>
      
    </div>
  )
}

export default App
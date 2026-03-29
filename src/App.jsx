import { useState } from 'react'
import Navbar from './Components/Navbar'
import Achievements from './Sections/Achievements'
import Home from './Sections/Home'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Experience from './Sections/Experience'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import CustomCursor from './Components/CustomCursor'
import Education from './Sections/Education'
import './index.css'

function App() {

  return (
    <div className='relative gradient text-white'>
    {/* <ParticlesBackground/> */}
    <CustomCursor/>
    <Navbar/>
    <Home/>
    <About/>
    <Education />
    <Skills/>
    <Projects/>
    <Experience/>
    <Achievements/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App

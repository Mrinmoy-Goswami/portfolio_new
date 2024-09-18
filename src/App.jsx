
import React, { lazy } from 'react'
import './App.css'
import Navbar from './components/uiComp/Navbar'
import Contact from './sections/Contact'
import Hero from './sections/Hero'

import Techstack from './sections/Techstack'
import Timeline from './sections/Timeline'

function App() {

  const LazyProjects = lazy(()=>import("./sections/Projects"))
  // const LazyHero = lazy(()=>import("./sections/Hero"))
  return (
    <>
 
    <Navbar/>
    <Hero/>
    
    {/* <Hero/> */}
    <React.Suspense fallback = {<span className='text-white font-sans text-xl text-center w-screen h0screen bg-gradient-to-r from-[#001F3F] to-[#000000]'>Loading</span>}>
    <LazyProjects/>
    </React.Suspense>
    
    <Techstack/>
    <Timeline/>
    <Contact/>
    </>
  )
}

export default App

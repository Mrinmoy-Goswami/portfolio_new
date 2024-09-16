import React from 'react'
import react from '../assets/images/react2.png'
import TechCard from '../components/uiComp/TechCard'

const Techstack = () => {
  return (
    <div className='w-screen '>
       <h1 className='text-center font-sans  text-white text-[2rem] sm:text-[3.5rem]'>Tech stack</h1>
       <div className='w-full items-center justify-center flex sm:flex-row flex-col '>

       <TechCard image={react} name={'React.jS'} experience={"2 years+"}/>
       <TechCard image={react} name={'React.jS'} experience={"2 years+"}/>
       <TechCard image={react} name={'React.jS'} experience={"2 years+"}/>
       <TechCard image={react} name={'React.jS'} experience={"2 years+"}/>
       </div>

    </div>
  )
}

export default Techstack

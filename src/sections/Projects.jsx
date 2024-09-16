import React from 'react'
import ProjectCard from '../components/uiComp/ProjectCard'
import gryffincode from  ".././assets/images/gryffincode.jpeg"


const Projects = () => {
  return (
    <div className='w-screen '>
      <h1 className='text-center w-screen font-sans  text-white text-[2rem] sm:text-[3.5rem]'>projects</h1>

      <div className='w-full flex flex-wrap sm:flex-row flex-col items-center justify-center'>
      <ProjectCard title={"Gryffincode"} description={"Basically , a Harry Potter themed leetcode with roadmaps"} image={gryffincode} link={"https://gryffincode.netlify.app"}/>
      <ProjectCard title={"Gryffincode"} description={"Basically , a Harry Potter themed leetcode with roadmaps"} image={gryffincode} link={"https://gryffincode.netlify.app"}/>
      <ProjectCard title={"Gryffincode"} description={"Basically , a Harry Potter themed leetcode with roadmaps"} image={gryffincode} link={"https://gryffincode.netlify.app"}/>

      </div>
    </div>
  )
}

export default Projects

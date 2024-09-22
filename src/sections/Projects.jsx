import React, { useMemo } from 'react'
import ProjectCard from '../components/uiComp/ProjectCard'
import gryffincode from  ".././assets/images/gryffincode.jpeg"
import tourbook from "../assets/images/tourbook.jpg"
import recetas from "../assets/images/recetas.jpg"
import weather from "../assets/images/weather.jpg"
import letskart from "../assets/images/letskart.jpg"






const Projects = () => {

  const projects = useMemo(()=>[
    {name:"Gryffincode" , image: gryffincode , link : 'https://gryffincode.netlify.app',
      description:"Basically a Harry Potter themed Leetcode prototype with roadmap based themed problems"},
    {name:"Tourbook" , image: tourbook , link : 'https://tourbook-blog.netlify.app/',
      description:"A travel blog app built with MERN. Post your travel saga with photos"},
    {name:"Recetas" , image:recetas , link : 'https://recetasbymrin.netlify.app/',
      description:"A recipe app to search for 250,000+ recipes, built in a hackathon in 2nd year of college"},
    {name:"Weather App" , image: weather , link : 'https://todays-weather-mrin.netlify.app/',
      description:"Search for weather of any location , along with specific animated icons for different weathers"},
    {name:"Letskart" , image: letskart , link : 'https://github.com/Mrinmoy-Goswami/LetsKart',
       description:"A basic e-commerce app with React+ Redux"}
  ],[])
 
  return (
    <div id="projects"className='w-screen my-10 '>
      <h1 className='text-center w-screen font-sans  text-white text-[2rem] sm:text-[3.5rem] mb-5'>projects</h1>


      <div className='w-full flex flex-wrap sm:flex-row flex-col items-center justify-center'>
      {
  projects.map((item,index)=>(<ProjectCard  key =  {index} title={item.name}  description={item.description} image={item.image} link={item.link}/>))
}
      
      </div>
    </div>
  )
}

export default Projects

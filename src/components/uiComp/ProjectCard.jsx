import React from 'react'


const ProjectCard = ({title,description,image,link}) => {
  return (
   
    
    <div className='sm:w-1/4 w-3/4   h-[20rem] md:h-[18rem] backdrop-blur-lg  rounded shadow-md shadow-white
    transition ease-in-out delay-150 bg-blue-500 m-5 p-4  font-sans flex  flex-col justify-center items-center bg-gradient-to-r from-gray-600 to-gray-800'>
      <img src={image} className='h-1/2 w-full object-cover bg-blend-color-burn rounded'  alt='image' />
     
      <span className='sm:text-xl text-sm font-bold text-gray-300'>{title}</span>
      <span className='text-sm text-start text-gray-300 w-full overflow-auto'>{description}</span>
      <button className='text-white w-1/3 bg-gradient-to-r from-[#001F3F] to-[#000000] sm:p-2 p-1  rounded mt-2'> <a target='_blank' href={link}>visit</a></button>
  
    </div>
  
  )
}

export default ProjectCard

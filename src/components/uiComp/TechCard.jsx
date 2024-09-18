import React from 'react'

const TechCard = ({image,name,experience}) => {
  return (
    <div className='sm:w-1/5 text-gray-300 sm:h-[5rem] md:h-[4rem] w-3/4 m-4  bg-gradient-to-r from-gray-600 to-gray-800 flex flex-col
     p-1 shadow-white shadow-sm hover:shadow-sky-700 hover:shadow-md'>
        <span className='w-4/5 h-[1px] bg-blue-500 mb-2 '>
        </span>
        <span className='flex flex-row'>

      <img src={image}  className='h-10 w-10  object-cover w-1/5 rounded-full mr-2' alt='image' loading='lazy'/>
      <span className='flex flex-col items-end text-sm'>
        <span >{name}</span>
        <span>Experience : {experience}</span>
      </span>
        </span>
    </div>
  )
}

export default TechCard

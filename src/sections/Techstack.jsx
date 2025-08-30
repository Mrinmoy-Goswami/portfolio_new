
import react from '../assets/images/react2.png'
import aws from '../assets/images/aws.png'
import cpp from '../assets/images/c++.png'
import firebase from "../assets/images/firebase.png"
import git from "../assets/images/git.png"
import javascript from "../assets/images/javascript.png"
import materialui from "../assets/images/materialUi.png"
import mongodb from "../assets/images/mongodb.png"
import nodejs from "../assets/images/nodejs.jpg"
import python from "../assets/images/python.png"
import redux from "../assets/images/redux.png"
import tailwind from "../assets/images/tailwind.png"
import TechCard from '../components/uiComp/TechCard'


const techstack = [
  {image:react,name:"React.JS", experience:"2 years+"},
  {image:nodejs,name:"Node.JS", experience:"1 year+"},
  {image:mongodb,name:"MongoDB", experience:"1 year+"},
  {image:tailwind,name:"TailwindCSS", experience:"1 year+"},
  {image:javascript,name:"Javascript", experience:"2 years+"},
  {image:materialui,name:"Material UI", experience:"1 year+"},
  {image:cpp,name:"C++", experience:"3 years+"},
  {image:git,name:"Git", experience:"2 years+"},
  {image:firebase,name:"Firebase", experience:"1 year+"},
  {image:python,name:"Python", experience:"6 months"},
  {image:redux,name:"Redux", experience:"1 year+"},
  {image:aws,name:"AWS", experience:"6 months+"},

]

const Techstack = () => {
  return (
    <div className='w-screen  my-10'>
       <h1 className='text-center font-sans  text-white text-[2rem] sm:text-[3.5rem] mb-5 font-bold'>Tech stack</h1>
       <div className='w-full items-center justify-center flex sm:flex-row flex-col flex-wrap '>
        {techstack.map((item,index)=><TechCard key={index} image={item.image} name={item.name} experience={item.experience} />)}
       
       </div>

    </div>
  )
}

export default Techstack

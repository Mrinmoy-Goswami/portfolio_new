import React from 'react'
import youtube from "../assets/images/youtube.jpg"
import whatsapp from "../assets/images/whatsapp.png"
import linkedin from "../assets/images/linkedin.png"
import phone from "../assets/images/phone.png"
import gmail from "../assets/images/gmail.png"
import insta from "../assets/images/instagram.jpg"
import github from "../assets/images/github.jpg"
import { title } from 'framer-motion/client'





const contact = [
{image : gmail, title:"Write a mail to me " , link:"mailto:mrinmoygoswami777@gmail.com"},
{image: whatsapp , title:"Text me on whatsapp", link:"https://wa.me/8638709407"},
{image: phone , title:"Call me", link :"tel:+918638709407"},
{image: linkedin, title:"Connect with me on Linkedin", link:"https://www.linkedin.com/in/mrinmoy-goswami-83a1431b7/"}
]
const follow = [
    {image: insta , title:"Follow me on instagram ", link:"https://www.instagram.com/go_mrin/"},
    {image: github , title:"Follow me on Github ", link:"https://github.com/Mrinmoy-Goswami"},
    {image: youtube , title:"Follow me on Youtube ", link:"https://www.youtube.com/@geek4707"}
    

]

const Contact = () => {
  return (
    <div id='contact' className='w-screen'>

      <h1 className='text-center w-screen font-sans  text-white text-[2rem] sm:text-[3.5rem] mb-5'>connect with me</h1>
      <div className='w-full flex sm:flex-row flex-col sm:justify-between items-center '>
        {/* Contact me on */}
        
        <div className='flex flex-row sm:w-1/2 w-full  justify-center sm:shadow-md shadow-white mb-10'>
            {
                contact.map((item,index)=>(<a className='mx-3 my-5' target="_blank" title={item.title} href={item.link}>
                    <img src={item.image} className='sm:h-16 sm:w-16 h-12 w-12 rounded-full shadow-md shadow-white' />
                </a> ))
            }
        </div>
        {/* Follow me on  */}
        <div className='flex flex-row sm:w-1/2 w-full justify-center sm:shadow-md shadow-white mb-10'>
            {
                follow.map((item,index)=>(<a className='mx-3 my-5' target="_blank" title={item.title} href={item.link}>
                    <img src={item.image} className='sm:h-16 sm:w-16 h-12 w-12 rounded-full shadow-md shadow-white' />
                </a> ))
            }
        </div>
    
      </div>
    </div>
  )
}

export default Contact

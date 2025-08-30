

import { Timeline } from "./Timeline";
import accenture from "../../assets/images/accenture.jpg"
import blackcoffer from "../../assets/images/blackcoffer.png"
import celebal from "../../assets/images/celebal.jpg"
import oppo from "../../assets/images/Oppo.jpg"
import oppocerti from "../../assets/images/oppocerti.jpeg"
import celebalcerti from "../../assets/images/celebalcerti.jpeg"
import accenturewelcome from "../../assets/images/accentureWelcome.jpeg"



export function TimelineDemo() {
  const data = [
    {
      title: "July 2024",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Joined Accenture as an Associate Software Engineer
          </p>
     
          <div className="grid grid-cols-2 gap-4">
          <img
      src={accenture}
      alt="accenture template"
      width="300"
      height="300"
      loading = 'lazy'
      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md shadow-white"/>
       <img
      src={accenturewelcome}
      alt="accentureKit"
      width="300"
      height="300"
      loading = 'lazy'
      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md shadow-white"/>

            
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2023",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Worked as an SDE Intern at Blackcoffer, where I contributed to live projects using React.js and collaborated closely with
           the ML and Data Science teams to discuss and implement backend features, ensuring seamless integration across the tech stack.
          </p>
         
          <div className="grid grid-cols-2 gap-4">
          <img
      src={blackcoffer}
      alt=""
      width="300"
      height="300"
      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md shadow-white"/>
          </div>
        </div>

      ),
    },
    {
      title: "June-Aug 2023",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Participated in the Celebal Summer Internship as a React.js Developer, where I gained exposure to 
          industry-standard coding practices and contributed to several
           React-based mini-projects, enhancing my development skills and understanding of professional workflows.
          </p>
         
          <div className="grid grid-cols-2 gap-4">
          <img
      src={celebal}
      alt="Celebal"
      width="300"
      height="300"
      loading = 'lazy'
      className=" rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md shadow-white"/> <img
      src={celebalcerti}
      alt="celebal"
      width="300"
      height="300"
      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md shadow-white"/>
          </div>
        </div>

      ),
    },
    {
      title: "May-Dec 2022",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
         Worked as a Curator in Oppo+OnePlus gamespace. Lead teams of interns in content writing, managed forums along with review writing
          </p>
         
          <div className="grid grid-cols-2 gap-4">
          <img
      src={oppo}
      alt="accentureKit"
      width="300"
      height="300"
      loading = 'lazy'
      className=" rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md shadow-white"/> <img
      src={oppocerti}
      alt="accentureKit"
      width="300"
      height="300"
      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md shadow-white"/>
          </div>
        </div>

      ),
    },
    
  ];
  return (
    (<div className="w-full h-full">
      <Timeline data={data} />
    </div>)
  );
}

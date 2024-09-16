import React from "react";
import { BackgroundLines } from "./Backgroundlines";

export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className=" flex items-between justify-center z-2  w-screen flex-col  ">
      <h2
        className="font-sans text-white sm:text-[5rem] text-[2rem]">
        Hello, I am  <span className="text-gradient"> Mrinmoy </span>
      </h2>
      <p
        className="mb-3   md:text-[2rem] text-[1rem] text-white font-sans text-center">
        building the <span className="text-gradient">web</span> , one coffee at a time
      </p>
     
    </BackgroundLines>
    
  )
  );
}

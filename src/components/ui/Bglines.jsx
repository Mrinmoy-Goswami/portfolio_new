import { BackgroundLines } from "./Backgroundlines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex flex-col items-center justify-center w-screen h-screen text-center px-4">
      <h2
        className="font-sans text-white sm:text-[5rem] text-[2.5rem] font-bold leading-tight animate-fade-in"
      >
        Hello, I am{" "}
        <span className="text-gradient">Mrinmoy</span>
      </h2>
      
      <p
        className="mt-4 mb-6 md:text-[2rem] text-[1.2rem] text-white font-sans max-w-2xl animate-fade-in-up"
      >
        building the <span className="text-gradient">web</span>, one coffee at a time 
      </p>
    </BackgroundLines>
  );
}

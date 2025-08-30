import React, { lazy } from "react";
import "./App.css";
import Navbar from "./components/uiComp/Navbar";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Techstack from "./sections/Techstack";
import Timeline from "./sections/Timeline";

function App() {
  const LazyProjects = lazy(() => import("./sections/Projects"));

  const ProjectSkeleton = () => (
  <div className="sm:w-1/4 w-3/4 h-[20rem] md:h-[18rem] m-5 rounded-xl bg-gray-800 animate-pulse" />
);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

     <React.Suspense
  fallback={
    <div className="flex flex-wrap justify-center w-full min-h-[80vh] bg-gradient-to-r from-[#001F3F] to-[#000000] py-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectSkeleton key={i} />
      ))}
    </div>
  }
>
  <LazyProjects />
</React.Suspense>

      <Techstack />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;

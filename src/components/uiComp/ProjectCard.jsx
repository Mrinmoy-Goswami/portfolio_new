import { memo, useState } from "react";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, description, image, link }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="sm:w-1/4 w-3/4 h-[20rem] md:h-[18rem]
        transition duration-300 ease-in-out
        hover:-translate-y-3
        backdrop-blur-lg rounded-xl shadow-md
        m-5 p-4 font-sans flex flex-col justify-center items-center
        bg-gradient-to-br from-gray-800 to-gray-900
        border border-transparent
        hover:border-cyan-300
        hover:bg-gradient-to-r hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700
        hover:shadow-[0_0_12px_2px_rgba(0,255,255,0.3)]"
    >
      <div className="relative h-1/2 w-full">
        {/* Loader (skeleton or spinner) */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700 animate-pulse rounded">
            <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          </div>
        )}

        {/* Image */}
        <img
          src={image}
          alt="project"
          loading="lazy"
          onLoad={() => setLoading(false)}
          className={`h-full w-full object-cover rounded transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <span className="sm:text-xl text-sm font-bold text-gray-300 mt-2">
        {title}
      </span>
      <span className="text-sm text-start text-gray-300 w-full overflow-auto">
        {description}
      </span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="text-black w-1/3 bg-white sm:p-2 p-1 rounded mt-2 text-center"
      >
        Visit
      </a>
    </div>
  );
};

export default memo(ProjectCard);

// eslint-disable-next-line react/prop-types
const TechCard = ({ image, name, experience }) => {
  return (
    <div
      className="sm:w-1/5 sm:h-[5rem] md:h-[4rem] w-3/4 m-4 
      bg-gradient-to-r from-[#0f172a] to-[#1e293b] 
      flex flex-col p-3 rounded-xl border border-transparent
      shadow-md shadow-sky-900/30 
      hover:from-[#1e293b] hover:to-[#0f172a]
      hover:border-cyan-400 hover:shadow-cyan-400/60 
      hover:scale-105 transform transition-all duration-300 ease-out"
    >
      {/* neon divider line */}
      <span className="w-4/5 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 rounded-full" />

      {/* Content */}
      <div className="flex flex-row items-center">
        <img
          src={image}
          alt="tech"
          loading="lazy"
          className="h-10 w-10 rounded-full object-cover mr-3 ring-2 ring-cyan-400/50 hover:ring-cyan-300/90 transition"
        />

        <div className="flex flex-col text-sm text-gray-200">
          <span className="font-medium tracking-wide">{name}</span>
          <span className="text-gray-400 text-xs">
            Experience: <span className="text-cyan-400">{experience}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechCard;

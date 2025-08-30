
const Navbar = () => {
  return (
    <nav
      className="
       w-full py-4 px-6
    sticky top-0 z-50
    bg-gradient-to-r from-fuchsia-800/40 via-purple-900/30 to-cyan-800/40 
backdrop-blur-xl 
shadow-[0_0_25px_rgba(255,0,255,0.4)] 
border-b border-fuchsia-400/30
    rounded-b-2xl
      "
    >
      <ul className="flex justify-center space-x-10 font-semibold text-lg">
        <li>
          <a
            href="#projects"
            className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            Experience
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

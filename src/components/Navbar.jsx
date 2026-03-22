import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "About", path: "#about" },
    { id: 2, name: "Projects", path: "#projects" },
    { id: 3, name: "Skills", path: "#skills" },
    { id: 4, name: "Education", path: "#education" },
    { id: 5, name: "Contact", path: "#contact" },
  ];
  return (
    <>
      <nav className="bg-black text-white p-4 fixed w-full h-20 z-50 md:flex">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold text-[#5F72FF]">
            <a href="#">Yuvan</a>
          </div>

          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.path} className="hover:text-[#5F72FF] transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button (Hidden on desktop) */}
          <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 " onClick={() => setIsOpen(!isOpen)}>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {/* Logic: Only shows if isOpen is true AND we are on a small screen */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden border-t mt-4 pb-4 border-slate-700 bg-black z-100`}>
          <ul className="flex flex-col space-y-4 pt-4 px-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  className="block text-lg hover:text-blue-400"
                  onClick={() => setIsOpen(false)} // Close menu when link is clicked
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

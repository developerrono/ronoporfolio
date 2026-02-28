import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-center items-center h-20">
          <ul className="flex gap-16 text-sm tracking-[0.35em] uppercase font-light">
            <li>
              <a href="#home" className="hover:opacity-60 transition-opacity">
                Home
              </a>
            </li>
            <li>
              <a href="#journal" className="hover:opacity-60 transition-opacity">
                Journal
              </a>
            </li>
            <li>
              <a href="#galleries" className="hover:opacity-60 transition-opacity">
                Galleries
              </a>
            </li>
            <li>
              <a href="#about" className="hover:opacity-60 transition-opacity">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
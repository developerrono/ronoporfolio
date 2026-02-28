import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Index() {
  const { toggleTheme } = useContext(ThemeContext)!;

  const [visitors, setVisitors] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/rono-portfolio-visitors/visits")
      .then((res) => res.json())
      .then((data) => {
        const endValue = data.value;
        setVisitors(endValue);

        let start = 0;
        const duration = 1500;
        const stepTime = 20;
        const step = endValue / (duration / stepTime);

        const counter = setInterval(() => {
          start += step;
          if (start >= endValue) {
            start = endValue;
            clearInterval(counter);
          }
          setDisplayCount(Math.floor(start));
        }, stepTime);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      
      {/* Architectural Navbar */}
      <header className="w-full bg-gray-100 dark:bg-black border-b border-gray-200 dark:border-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left Logo */}
            <div className="text-sm tracking-widest font-medium">
              RONO STUDIO
            </div>

            {/* Center Navigation */}
            <nav className="hidden md:flex items-center space-x-12 text-sm tracking-wide uppercase">
              <a href="#work" className="hover:opacity-60 transition-opacity">
                Work
              </a>
              <a href="#services" className="hover:opacity-60 transition-opacity">
                Services
              </a>
              <a href="#about" className="hover:opacity-60 transition-opacity">
                About
              </a>
              <a href="#blog" className="hover:opacity-60 transition-opacity">
                Blog
              </a>
              <a href="#contact" className="hover:opacity-60 transition-opacity">
                Contact
              </a>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              <button
                onClick={toggleTheme}
                className="text-sm border px-4 py-1 transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Theme
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tight">
          Rono Kibet
        </h1>

        <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
          Frontend Engineer & Systems Builder.  
          Designing minimal interfaces.  
          Building analytical tools.
        </p>

        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          {visitors !== null
            ? `${displayCount.toLocaleString()} visitors`
            : "Loading visitors..."}
        </div>
      </section>
    </div>
  );
}
import React, { useState, useEffect } from "react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection: React.FC = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formattedTime = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setCurrentTime(formattedTime);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => scrollToSection("contact");

  return (
    <section className="min-h-screen flex items-center bg-white text-black dark:bg-black dark:text-white px-6">
      <div className="max-w-6xl mx-auto w-full">

        {/* Top Bar */}
        <div className="flex justify-between items-center text-xs tracking-wider text-gray-500 dark:text-gray-400 mb-32">
          <div className="uppercase">Rono Kibet</div>
          <div className="font-mono">{currentTime}</div>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-24 items-center">

          {/* Left — Identity */}
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight">
              Frontend Engineer
              <br />
              & Systems Builder
            </h1>

            <p className="mt-10 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              I design and build minimal, performance-focused web applications.
              Structured thinking. Clean interfaces. Analytical systems.
            </p>

            <button
              onClick={scrollToContact}
              className="mt-14 border border-black dark:border-white px-10 py-4 text-xs tracking-widest uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Right — Logo Placeholder */}
          <div className="flex justify-start md:justify-end">
            <div className="w-56 h-56 border border-black dark:border-white flex items-center justify-center text-xs tracking-[0.3em] uppercase">
              Logo
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

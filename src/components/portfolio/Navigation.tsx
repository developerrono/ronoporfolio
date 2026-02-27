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

  return (
    <section className="min-h-screen flex items-center bg-white text-black px-6">
      <div className="max-w-6xl mx-auto w-full">

        {/* Top Bar */}
        <div className="flex justify-between items-center text-xs uppercase tracking-widest mb-32">
          <div>Rono Kibet</div>
          <div className="font-mono">{currentTime}</div>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-24 items-center">

          {/* Left — Identity */}
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight">
              Systems Builder
              <br />
              & Analytical Thinker
            </h1>

            <p className="mt-12 text-lg max-w-xl leading-relaxed text-gray-600">
              I design structured digital systems at the intersection of
              trading, software, and minimal design. Precision over noise.
              Function over decoration.
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-16 border border-black px-10 py-4 text-xs uppercase tracking-widest
                         hover:bg-black hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Right — Identity Block */}
          <div className="flex justify-start md:justify-end">
            <div className="w-64 h-64 border border-black flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest">
                  RONO
                </div>
                <div className="text-xs mt-2 text-gray-600">
                  Developer 
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
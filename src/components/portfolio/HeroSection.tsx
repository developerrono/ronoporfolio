import React, { useState, useEffect } from "react";
import myphoto from "@/assets/myphoto.jpg";
import { Button } from "@/components/ui/button";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection: React.FC = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formattedTime = new Date().toLocaleTimeString("en-US", {
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
    <section className="relative min-h-screen flex items-center justify-center bg-black text-gray-200 px-6 py-20 overflow-hidden">
      {/* ⏱ Timer in top-right */}
      <div className="absolute top-6 right-6 text-gray-400 text-sm tracking-wide font-mono">
        {currentTime}
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image with online dot */}
          <div className="relative flex-shrink-0">
            <img
              src={myphoto}
              alt="Rono - Developer Portfolio"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border border-gray-700 object-cover shadow-[0_0_20px_rgba(52,211,153,0.15)]"
            />
            {/* Subtle online dot */}
            <div className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full ring-2 ring-black animate-pulse" />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-green-400 bg-clip-text text-transparent">
              Hi, I'm Rono
            </h1>

            <p className="text-green-400/80 text-lg md:text-xl mb-8 font-medium">
              IT Support&nbsp;|&nbsp;UI/UX Designer&nbsp;|&nbsp;Web Developer
            </p>

            <div className="max-w-2xl lg:max-w-none mb-8 text-gray-400 leading-relaxed space-y-4">
              <p>
                I design and build clean, intuitive digital experiences that merge aesthetics with performance.
              </p>
              <p>
                Focused on crafting efficient, user-centered web applications that deliver meaningful impact.
              </p>
            </div>

            <Button
              onClick={scrollToContact}
              className="bg-green-500/20 hover:bg-green-400/30 text-green-300 font-semibold px-8 py-4 rounded-xl border border-green-400/40 transition-transform transform hover:scale-105 backdrop-blur-sm"
              size="lg"
            >
              Let’s Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

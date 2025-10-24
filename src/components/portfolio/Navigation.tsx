import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation: React.FC = () => {
  // We keep track of the active section, but remove 'isVisible' state
  const [activeSection, setActiveSection] = useState("hero");
  const [navBackground, setNavBackground] = useState("bg-gray-950/90 backdrop-blur-md");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "roadmap", label: "Roadmap" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Logic to change background on scroll (optional, but good for contrast)
      if (window.scrollY > 50) {
          setNavBackground("bg-gray-950/90 backdrop-blur-md border-b border-teal-500/20 shadow-xl");
      } else {
          setNavBackground("bg-gray-950/90 backdrop-blur-md");
      }

      // Find active section based on scroll position
      const sections = navItems.map(item => item.id);
      let currentSection = sections[0]; // Default to home

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section's top is near the top of the viewport (e.g., within the first 150px)
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to element, adjusting for the sticky navbar height (e.g., -80px)
      const element = document.getElementById(sectionId);
      if (element) {
        const topPosition = element.offsetTop - 80; 
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    }
  };

  return (
    // Changed to 'sticky top-0 w-full' to ensure it stays at the top
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${navBackground} px-6 py-3`}>
      {/* --- CHANGE HERE: Changed lg:justify-start to lg:justify-center to center the content on large screens --- */}
      <div className="container mx-auto max-w-6xl flex justify-center lg:justify-center">
        <div className="flex items-center gap-1 bg-gray-900 p-2 rounded-full border border-teal-500/30 shadow-lg">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  // Active state matches the techy teal accent
                  ? "bg-teal-600 text-white shadow-[0_0_8px_rgba(5,150,105,0.7)] hover:bg-teal-700"
                  // Inactive state is transparent text
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
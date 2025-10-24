import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "roadmap", label: "Roadmap" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

// Define the scroll offset (how many pixels from the top should trigger the change)
const SCROLL_OFFSET = 150; 

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Use useCallback to memoize the scroll handler function
  const handleScroll = useCallback(() => {
    // 1. Logic for visibility (show/hide the nav bar)
    setIsVisible(window.scrollY > 100);

    // 2. Logic for finding the active section (Scroll-Spy)
    let currentActive = navItems[0].id; // Default to 'hero' (Home)
    
    // Iterate in reverse to ensure the lowest section on the page takes precedence
    for (let i = navItems.length - 1; i >= 0; i--) {
      const item = navItems[i];
      const element = document.getElementById(item.id);

      if (element) {
        // Get the top position of the element relative to the viewport
        const rect = element.getBoundingClientRect();
        
        // If the top of the element is above or at the SCROLL_OFFSET
        if (rect.top <= SCROLL_OFFSET) {
          currentActive = item.id;
          break; // Found the highest visible section, so stop and use it
        }
      }
    }

    setActiveSection(currentActive);
  }, []);

  // Set up the scroll listener
  useEffect(() => {
    // Run once on mount to set the initial state
    handleScroll(); 
    
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // Dependency on handleScroll to ensure cleanup works correctly

  const scrollToSection = (sectionId: string) => {
    // Set active state instantly when clicking to provide immediate feedback
    setActiveSection(sectionId);
    
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Find the element and scroll to it
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Only render the navigation bar if it should be visible
  if (!isVisible) return null;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 glass-effect px-6 py-3 rounded-full border border-border">
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection(item.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-teal text-white shadow-md" // Added shadow for better distinction
                : "hover:bg-surface-hover/50 text-foreground"
            }`}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
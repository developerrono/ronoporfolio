import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef<HTMLDivElement>(null);

  // Store the cursor and nav positions for smooth animation
  const cursorPos = useRef({ x: 0, y: 0 });
  const navPos = useRef({ x: 0, y: 0 });

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "roadmap", label: "Roadmap" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);

      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursorPos.current.x = e.clientX - window.innerWidth / 2;
      cursorPos.current.y = e.clientY - 100; // slightly below cursor
    };

    const animate = () => {
      navPos.current.x += (cursorPos.current.x - navPos.current.x) * 0.05;
      navPos.current.y += (cursorPos.current.y - navPos.current.y) * 0.05;

      if (navRef.current) {
        navRef.current.style.transform = `translate(calc(-50% + ${navPos.current.x * 0.02}px), ${navPos.current.y * 0.01}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
                 bg-black/50 backdrop-blur-md border border-gray-700 
                 rounded-full px-6 py-3 shadow-lg transition-transform duration-200 ease-out"
    >
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection(item.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-gray-800 text-green-400"
                : "hover:bg-gray-800/60 text-gray-300"
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

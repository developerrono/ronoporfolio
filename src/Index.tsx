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
      
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center border-b border-black dark:border-white">
        <div className="text-lg font-medium tracking-wide">
          RONO
        </div>

        <div className="flex items-center gap-8 text-sm uppercase tracking-widest">
          <button onClick={toggleTheme} className="border px-3 py-1">
            Theme
          </button>
        </div>
      </nav>

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

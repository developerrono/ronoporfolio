import React, { useEffect, useState } from "react";

export default function Index() {
  const [visitors, setVisitors] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/rono-portfolio-visitors/visits")
      .then((res) => res.json())
      .then((data) => {
        const endValue = data.value;
        setVisitors(endValue);

        // Animate from 0 to the new count
        let start = 0;
        const duration = 1500; // in ms
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-400">
        {visitors !== null
          ? `👥 ${displayCount.toLocaleString()} visitors so far`
          : "Loading visitor count..."}
      </p>
    </div>
  );
}

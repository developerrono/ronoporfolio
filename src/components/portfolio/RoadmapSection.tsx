const RoadmapSection = () => {
  const roadmapData = [
    {
      year: "2022 — 2024",
      title: "Information Technology",
      description:
        "Completed formal IT training covering networking, system administration, databases, and core infrastructure foundations.",
      status: "Completed",
    },
    {
      year: "2024 — 2025",
      title: "Web Development",
      description:
        "Built full-stack applications using React and TypeScript with focus on clean architecture, scalability, and performance.",
      status: "Completed",
    },
    {
      year: "2025 — 2026",
      title: "Advanced Systems & Cloud",
      description:
        "Expanding into Linux systems, cloud infrastructure, DevOps workflows, and security-focused architecture.",
      status: "Current",
    },
    {
      year: "2026 — 2027",
      title: "Cybersecurity Specialization",
      description:
        "Transitioning into cybersecurity with focus on network defense, penetration testing, and security certifications.",
      status: "Upcoming",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white text-black" id="roadmap">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Professional Roadmap
          </h2>
          <p className="text-gray-600 max-w-xl">
            A focused progression from core IT foundations toward cybersecurity expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {roadmapData.map((item, index) => (
            <div key={index} className="border-l border-black/20 pl-8 relative">
              
              {/* Minimal dot */}
              <div className="absolute -left-[4px] top-2 w-2 h-2 bg-black rounded-full" />

              <div className="mb-2 text-sm text-gray-500 font-mono tracking-wide">
                {item.year}
              </div>

              <h3 className="text-xl font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>

              <span className="text-xs uppercase tracking-widest text-gray-500">
                {item.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoadmapSection;
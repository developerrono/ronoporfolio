const RoadmapSection = () => {
  const roadmapData = [
    {
      year: "2023–2024",
      title: "Web Development",
      icon: "💻",
      description: "Mastered React, TypeScript, and modern web technologies, building several full-stack applications.",
      status: "completed"
    },
    {
      year: "2024–2025", 
      title: "UI/UX Design & Prototyping",
      icon: "🎨",
      description: "Focusing on user-centered design, advanced prototyping tools, and creating intuitive, accessible interfaces.",
      status: "current"
    },
    {
      year: "2025–2026",
      title: "Advanced IT Systems & Cloud",
      icon: "🛠",
      description: "Building expertise in system administration, cloud infrastructure (AWS/Azure), and technical support architecture.",
      status: "upcoming"
    },
    {
      year: "2026–2027",
      title: "Cybersecurity Expert",
      icon: "🔐", 
      description: "Advancing into network and application security, penetration testing, and earning industry-leading certifications.",
      status: "future"
    }
  ];

  return (
    // Set background to deep black (gray-950)
    <section className="py-20 px-6 bg-gray-950" id="roadmap">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            My Professional Roadmap
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My journey of continuous learning and skill development in tech.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - Highlighting the vertical line with teal accent */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-teal-600/50 rounded-full hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-16">
            {roadmapData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              // Status Colors/Styles
              const statusColors = {
                completed: { bg: 'bg-emerald-600/10', text: 'text-emerald-400', border: 'border-emerald-600/50', label: '✓ Completed', node: 'bg-emerald-500 shadow-emerald-500/50' },
                current: { bg: 'bg-teal-600/10', text: 'text-teal-400', border: 'border-teal-600/50', label: 'Currently Learning', node: 'bg-teal-500 shadow-teal-500/50' },
                upcoming: { bg: 'bg-indigo-600/10', text: 'text-indigo-400', border: 'border-indigo-600/50', label: 'Upcoming', node: 'bg-indigo-500 shadow-indigo-500/50' },
                future: { bg: 'bg-gray-700/10', text: 'text-gray-500', border: 'border-gray-700', label: 'Future Goal', node: 'bg-gray-600 shadow-gray-600/50' },
              }[item.status];

              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline node (for desktop) */}
                  <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-gray-950 z-10 ${statusColors.node} shadow-[0_0_15px]`} />
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : ''}`}>
                    <div 
                      className={`p-8 rounded-2xl border ${statusColors.border} bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/15 ${
                        item.status === 'future' ? 'opacity-80' : ''
                      }`}
                    >
                      <div className={`flex items-start gap-4 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="text-4xl">{item.icon}</span>
                        <div className={isEven ? 'md:order-last' : ''}>
                          <div className={`text-sm ${statusColors.text} font-mono font-medium mb-1`}>{item.year}</div>
                          <h3 className="text-xl font-heading font-bold text-white">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* Status Tag */}
                      <div className={isEven ? 'md:text-right' : 'md:text-left'}>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusColors.bg} ${statusColors.text}`}>
                          {statusColors.label}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for timeline alignment */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
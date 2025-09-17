const RoadmapSection = () => {
  const roadmapData = [
    {
      year: "2023–2024",
      title: "Web Development",
      icon: "💻",
      description: "Mastered React, TypeScript, and modern web technologies",
      status: "completed"
    },
    {
      year: "2024–2025", 
      title: "UI/UX Design",
      icon: "🎨",
      description: "Focusing on user-centered design and creating intuitive interfaces",
      status: "current"
    },
    {
      year: "2025–2026",
      title: "IT Support",
      icon: "🛠",
      description: "Building expertise in system administration and technical support",
      status: "upcoming"
    },
    {
      year: "2026–2027",
      title: "Cybersecurity Expert",
      icon: "🔐", 
      description: "Advancing into cybersecurity and ethical hacking",
      status: "future"
    }
  ];

  return (
    <section className="py-20 px-6" id="roadmap">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My Roadmap
          </h2>
          <p className="text-lg text-muted-foreground">
            My journey of continuous learning and skill development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-accent rounded-full hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-16">
            {roadmapData.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal rounded-full glow-teal border-4 border-background z-10"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className={`card-gradient p-8 rounded-2xl border border-border interactive-card ${
                    item.status === 'future' ? 'opacity-60' : ''
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{item.icon}</span>
                      <div className={index % 2 === 0 ? 'md:order-first' : ''}>
                        <div className="text-sm text-teal font-medium">{item.year}</div>
                        <h3 className="text-xl font-heading font-bold">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    
                    {item.status === 'current' && (
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal/20 text-teal">
                          Currently Learning
                        </span>
                      </div>
                    )}
                    
                    {item.status === 'completed' && (
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neon-green/20 text-neon-green">
                          ✓ Completed
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Spacer for timeline alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
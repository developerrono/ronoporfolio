const SkillsSection = () => {
  const skills = [
    {
      icon: "🛠",
      title: "IT Support",
      description: "System administration, troubleshooting, and technical support with a focus on user experience and efficient problem resolution.",
      technologies: ["Windows Server", "Linux", "Network Administration", "Help Desk", "System Monitoring"]
    },
    {
      icon: "🎨", 
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with a focus on user research, accessibility, and modern design principles.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research", "Accessibility", "Design Systems"]
    },
    {
      icon: "💻",
      title: "Web Development", 
      description: "Full-stack development with modern technologies, building scalable applications from concept to deployment.",
      technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"]
    }
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Building digital solutions with a multidisciplinary approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center group">
              <div className="card-gradient p-8 rounded-2xl border border-border interactive-card h-full flex flex-col">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-teal transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {skill.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-neon-green">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-surface text-xs rounded-full border border-border hover:border-teal/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
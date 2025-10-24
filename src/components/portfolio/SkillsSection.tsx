import React from "react";

const SkillsSection: React.FC = () => {
  const skills = [
    {
      icon: "🛠️",
      title: "IT Support",
      description:
        "System administration, troubleshooting, and technical support with a focus on user experience and efficient problem resolution.",
      technologies: [
        "Windows Server",
        "Linux",
        "Network Administration",
        "Help Desk",
        "System Monitoring",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with a focus on user research, accessibility, and modern design principles.",
      technologies: [
        "Figma",
        "Adobe XD",
        "Prototyping",
        "User Research",
        "Accessibility",
        "Design Systems",
      ],
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Full-stack development with modern technologies, building scalable applications from concept to deployment.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "PostgreSQL",
        "AWS",
      ],
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-gray-950 text-gray-200"
      id="skills"
    >
      <div className="container mx-auto max-w-6xl">
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4 font-heading">
            Professional Skills
          </h2>
          <p className="text-xl text-gray-400">
            A blend of technical, creative, and problem-solving abilities that bring ideas to life.
          </p>
        </div>

        {/* --- Skills Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group transform hover:scale-[1.03] transition-transform duration-300 ease-in-out"
            >
              <div className="p-8 h-full flex flex-col items-center text-center rounded-2xl 
                              bg-gray-900 border border-teal-500/20 shadow-lg shadow-teal-500/10 
                              hover:border-teal-400/40 hover:shadow-teal-400/20 transition-all duration-300">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-teal-400 uppercase tracking-wide">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-teal-400 border border-teal-600/50 hover:bg-teal-500/10 transition-colors"
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

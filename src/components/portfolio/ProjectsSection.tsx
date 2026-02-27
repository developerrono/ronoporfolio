import React from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "RONO Trades Journal Platform",
    description:
      "A professional-grade trading journal platform with P&L analytics, behavioral tracking, and institutional-level performance metrics.",
    tags: ["React", "Supabase", "Analytics", "Trading"],
    link: "https://rono-trades-journal-book.lovable.app/",
  },
  {
    title: "TinyLabs Creation",
    description:
      "A minimalist Micro-SaaS and Agentic Workflow brand website built with a strict black-and-white design philosophy.",
    tags: ["React", "Vite", "Minimal Design", "Micro-SaaS"],
    link: "https://tinylabs-creation.vercel.app/",
  },
  {
    title: "Minimalist Photography Platform",
    description:
      "A typography-focused photography showcase emphasizing whitespace, clean layout systems, and visual hierarchy.",
    tags: ["UI/UX", "Responsive", "Minimalism"],
    link: "https://verdant-journeys.vercel.app/",
  },
  {
    title: "Jamii International Hospital",
    description:
      "A structured and accessible healthcare informational platform optimized for clarity and usability.",
    tags: ["Healthcare", "Responsive Design", "JavaScript"],
    link: "https://jamii-international-hospital.vercel.app/",
  },
  {
    title: "Stark Architect Showcase Remix",
    description:
      "A refined architectural showcase interface focused on layout precision and spatial composition.",
    tags: ["Layout System", "Design Systems", "Frontend"],
    link: "https://remix-of-stark-architect-showcase-dusky.vercel.app/",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white text-black" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-semibold tracking-tight mb-6">
            Selected Work
          </h2>
          <p className="text-lg max-w-2xl text-gray-600">
            A curated collection of platforms and systems built with a focus on
            precision, minimalism, and functional clarity.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 p-10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-medium mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs uppercase tracking-wide border border-gray-300 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-black px-6 py-3 text-sm font-medium 
                           hover:bg-black hover:text-white transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
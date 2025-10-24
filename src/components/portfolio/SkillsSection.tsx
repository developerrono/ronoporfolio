import React from 'react';

// --- Type Definition for Project Data ---
interface Project {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  link: string; // Mandatory link for the View Project button
}

// --- Project Data ---
const projects: Project[] = [
  {
    icon: "🛍️",
    title: "Mobile E-commerce (Rono E-Shop)", 
    description: "A fully responsive e-commerce platform designed for a seamless mobile-first shopping experience, demonstrating product listing and cart functionality.",
    tags: ["React", "Mobile First", "E-commerce", "State Management"],
    link: "https://rono-e-shop.vercel.app/" 
  },
  {
    icon: "🏦", 
    title: "Simple Banking Interface",
    description: "A clean and modern user interface for a banking application prototype, focusing on intuitive transaction viewing and account management.",
    tags: ["UI/UX", "React", "Data Visualization", "Prototype"],
    link: "https://simplebanking-interfece.vercel.app/"
  },
  {
    icon: "🏥",
    title: "Jamii International Hospital", 
    description: "An informational website for a medical facility, optimized for quick access to services, contact information, and patient resources.",
    tags: ["HTML/CSS", "JavaScript", "Responsive Design", "Healthcare"],
    link: "https://jamii-international-hospital.vercel.app/"
  }
];

// --- Projects Section Component ---
const ProjectsSection: React.FC = () => {
  return (
    // Set the main background to deep black (gray-950)
    <section className="py-20 px-6 bg-gray-950" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4 font-heading">
            Featured Web Development Projects
          </h2>
          <p className="text-xl text-gray-400">
            Showcasing diverse expertise from e-commerce to healthcare systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              // Card background is slightly lighter gray-900 to give depth, with a subtle teal shadow/border
              className="group transform hover:scale-[1.02] transition-transform duration-300 ease-in-out rounded-xl bg-gray-900 border border-teal-500/20 shadow-xl shadow-teal-500/10 h-full flex flex-col overflow-hidden"
            >
              <div className="p-8 flex flex-col h-full">
                {/* Icon */}
                <div className="text-5xl mb-6 text-center">
                  {project.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow text-center">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      // Techy tags: dark background with teal text and border
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-teal-400 border border-teal-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View Project Button */}
               <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex justify-center items-center px-6 py-3 text-sm font-semibold rounded-lg 
             bg-gradient-to-r from-emerald-600 to-emerald-500 
             text-white border border-emerald-400/40 
             shadow-[0_0_15px_rgba(16,185,129,0.3)] 
             hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] 
             hover:from-emerald-500 hover:to-emerald-400 
             transition-all duration-300 transform hover:-translate-y-0.5 mt-auto"
>
  View Project
  <svg 
    className="w-4 h-4 ml-2" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    ></path>
  </svg>
</a>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
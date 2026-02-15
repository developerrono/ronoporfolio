interface Project {
  title: string;
  category: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  link?: string;
}

const ProjectBlock = ({ project }: { project: Project }) => {
  return (
    <div className="border-t border-black dark:border-white py-20">

      {/* Header Row */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Left Column */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-6">
            {project.category}
          </p>

          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Right Column */}
        <div className="text-gray-500 dark:text-gray-400 space-y-6 text-base leading-relaxed">
          <p>
            <span className="text-black dark:text-white font-medium">Problem:</span>{" "}
            {project.problem}
          </p>

          <p>
            <span className="text-black dark:text-white font-medium">Solution:</span>{" "}
            {project.solution}
          </p>
        </div>

      </div>

      {/* Features */}
      <div className="mt-12 grid md:grid-cols-2 gap-12">

        <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
          {project.features.map((feature, i) => (
            <li key={i}>— {feature}</li>
          ))}
        </ul>

        <div className="space-y-6">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="uppercase tracking-widest text-xs block mb-3">
              Technology
            </span>
            <p>{project.tech.join(" / ")}</p>
          </div>

          {project.link && (
            <a
              href={
                project.link.startsWith("http")
                  ? project.link
                  : `https://${project.link}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-widest uppercase border-b border-black dark:border-white pb-1 hover:opacity-60 transition-opacity duration-200"
            >
              View Project
            </a>
          )}
        </div>

      </div>

    </div>
  );
};

export default ProjectBlock;

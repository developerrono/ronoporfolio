import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Project {
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  link?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
        <p className="text-sm text-muted-foreground mb-3">{project.problem}</p>
        <p className="text-sm mb-4">{project.solution}</p>

        <ul className="text-sm list-disc list-inside text-muted-foreground mb-4">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>

      {/* ✅ View Button */}
      {project.link && (
        <CardFooter className="p-4 flex justify-end">
          <Button
            asChild
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:opacity-90 text-white font-semibold"
          >
            <a
              href={
                project.link.startsWith("http")
                  ? project.link
                  : `https://${project.link}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;

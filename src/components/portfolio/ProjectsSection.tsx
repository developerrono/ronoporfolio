import bankingImg from "@/assets/project-banking.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import healthcareImg from "@/assets/project-healthcare.jpg";
import travelImg from "@/assets/project-travel.jpg";
import sleepImg from "@/assets/project-sleep.jpg";
import web3Img from "@/assets/project-web3.jpg";

const ProjectsSection = () => {
  const webDevelopment = [
    {
      title: "Mobile Banking App",
      category: "FinTech",
      image: bankingImg,
      problem: "Traditional banking apps lack user-friendly interfaces and quick transaction capabilities",
      solution: "Created an intuitive banking experience with seamless QR payments and accessibility features",
      features: ["Easy transfers", "QR code payments", "Light/dark mode", "Accessibility compliance"],
      tech: ["React Native", "Node.js", "TypeScript", "Stripe API"]
    },
    {
      title: "E-commerce Platform",
      category: "Retail",
      image: ecommerceImg,
      problem: "Online shopping experiences are often cluttered and have complex checkout processes",
      solution: "Designed a clean, modern e-commerce platform focused on user experience and conversion",
      features: ["Smart search", "360° product view", "One-click checkout", "AI recommendations"],
      tech: ["React", "Next.js", "Tailwind CSS", "Shopify API"]
    },
    {
      title: "Hospital Management System", 
      category: "Healthcare",
      image: healthcareImg,
      problem: "Patients struggle to access healthcare services remotely and manage their health data",
      solution: "Built a comprehensive telemedicine platform connecting patients with healthcare providers",
      features: ["Doctor booking", "Video consultations", "Medication reminders", "Health records"],
      tech: ["React", "WebRTC", "Node.js", "Socket.io"]
    }
  ];

  
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="card-gradient rounded-2xl overflow-hidden border border-border interactive-card group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-teal/20 text-teal text-sm font-medium rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-teal transition-colors">
          {project.title}
        </h3>
        
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold text-neon-green mb-1">Problem</h4>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-teal mb-1">Solution</h4>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Key Features</h4>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature: string, idx: number) => (
                <span key={idx} className="px-2 py-1 bg-surface text-xs rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string, idx: number) => (
                <span key={idx} className="px-2 py-1 bg-teal/10 text-teal text-xs rounded-full border border-teal/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
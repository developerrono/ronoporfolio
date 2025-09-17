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

  const uiuxDesign = [
    {
      title: "Sleep Over App",
      category: "Health & Wellness",
      image: sleepImg,
      problem: "Users struggle to track sleep patterns and maintain healthy sleep habits",
      solution: "Designed an intuitive sleep tracking app with personalized recommendations",
      features: ["Sleep tracking", "Smart alarms", "Habit formation", "Progress analytics"],
      tech: ["Figma", "Principle", "After Effects", "Sketch"]
    },
    {
      title: "Mobile Banking App",
      category: "FinTech UI/UX",
      image: bankingImg,
      problem: "Banking interfaces are complex and intimidating for everyday users",
      solution: "Created user-friendly banking interface with intuitive navigation and clear visual hierarchy",
      features: ["Clean interface", "Accessibility design", "User flow optimization", "Responsive design"],
      tech: ["Figma", "Adobe XD", "Protopie", "Maze"]
    },
    {
      title: "Travel Planner",
      category: "Travel",
      image: travelImg,
      problem: "Travel planning interfaces are overwhelming with too much information",
      solution: "Designed a clean, visual travel planning experience with smart recommendations",
      features: ["Visual itineraries", "Map integration", "Collaborative planning", "Smart suggestions"],
      tech: ["Figma", "Framer", "Principle", "InVision"]
    },
    {
      title: "Web3 Website",
      category: "Blockchain",
      image: web3Img,
      problem: "Web3 interfaces are complex and intimidating for mainstream users",
      solution: "Created an accessible Web3 platform with simplified cryptocurrency interactions",
      features: ["Wallet integration", "NFT marketplace", "DeFi dashboard", "User onboarding"],
      tech: ["Figma", "React", "Web3.js", "Metamask"]
    }
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Projects by Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing work across development, design, and technical support
          </p>
        </div>

        {/* Web Development Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold">Web Development</h3>
              <p className="text-muted-foreground">Full-stack applications and modern web solutions</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevelopment.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* UI/UX Design Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold">UI/UX Design</h3>
              <p className="text-muted-foreground">User-centered design and interface solutions</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uiuxDesign.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* IT Support */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-surface-accent/50 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🛠️</span>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold">IT Support</h3>
              <p className="text-muted-foreground">Technical support and system administration</p>
            </div>
          </div>
          
          <div className="card-gradient rounded-2xl p-8 border border-border">
            <div className="max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Providing comprehensive IT support services including system maintenance, 
                network configuration, and technical troubleshooting for optimal performance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h4 className="font-semibold mb-2">System Fixing</h4>
                  <p className="text-sm text-muted-foreground">Diagnosing and resolving hardware and software issues</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h4 className="font-semibold mb-2">Network Management</h4>
                  <p className="text-sm text-muted-foreground">Configuring and maintaining network infrastructure</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h4 className="font-semibold mb-2">System Updates</h4>
                  <p className="text-sm text-muted-foreground">Keeping systems current with latest security patches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
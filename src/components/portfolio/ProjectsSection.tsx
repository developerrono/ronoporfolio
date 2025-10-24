import bankingImg from "@/assets/project-banking.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import healthcareImg from "@/assets/project-healthcare.jpg";
import travelImg from "@/assets/project-travel.jpg";
import sleepImg from "@/assets/project-sleep.jpg";
import web3Img from "@/assets/project-web3.jpg";
import ProjectCard from "@/components/portfolio/ProjectCard"; // ✅ make sure this exists

const ProjectsSection = () => {
  // ✅ Web Development Projects
  const webDevelopment = [
    {
      title: "Mobile Banking App",
      category: "TinyLabs Limited",
      image: bankingImg,
      problem:
        "Traditional banking apps lack user-friendly interfaces and quick transaction capabilities.",
      solution:
        "Created an intuitive banking experience with seamless QR payments and accessibility features.",
      features: [
        "Easy transfers",
        "QR code payments",
        "Light/dark mode",
        "Accessibility compliance",
      ],
      tech: ["React Native", "Node.js", "TypeScript", "Stripe API"],
      link: "https://simplebanking-interfece.vercel.app", // ✅ corrected to full link
    },
    {
      title: "E-commerce Platform",
      category: "Retail",
      image: ecommerceImg,
      problem:
        "Online shopping experiences are often cluttered and have complex checkout processes.",
      solution:
        "Designed a clean, modern e-commerce platform focused on user experience and conversion.",
      features: [
        "Smart search",
        "360° product view",
        "One-click checkout",
        "AI recommendations",
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "Shopify API"],
      link: "https://rono-e-shop.vercel.app", // ✅ live link
    },
    {
      title: "Hospital Management System",
      category: "Healthcare",
      image: healthcareImg,
      problem:
        "Patients struggle to access healthcare services remotely and manage their health data.",
      solution:
        "Built a comprehensive telemedicine platform connecting patients with healthcare providers.",
      features: [
        "Doctor booking",
        "Video consultations",
        "Medication reminders",
        "Health records",
      ],
      tech: ["React", "WebRTC", "Node.js", "Socket.io"],
      link: "https://jamii-international-hospital.vercel.app", // ✅ live link
    },
  ];

  // ✅ UI/UX Design Projects
  const uiuxDesign = [
    {
      title: "Sleep Over App",
      category: "Health & Wellness",
      image: sleepImg,
      problem:
        "Users struggle to track sleep patterns and maintain healthy sleep habits.",
      solution:
        "Designed an intuitive sleep tracking app with personalized recommendations.",
      features: [
        "Sleep tracking",
        "Smart alarms",
        "Habit formation",
        "Progress analytics",
      ],
      tech: ["Figma", "Principle", "After Effects", "Sketch"],
      link: "https://www.behance.net/gallery/xxxx/Sleep-Over-App", // optional link
    },
    {
      title: "Mobile Banking App UI/UX",
      category: "TinyLabs Limited",
      image: bankingImg,
      problem:
        "Banking interfaces are complex and intimidating for everyday users.",
      solution:
        "Created user-friendly banking interface with intuitive navigation and clear visual hierarchy.",
      features: [
        "Clean interface",
        "Accessibility design",
        "User flow optimization",
        "Responsive design",
      ],
      tech: ["Figma", "Adobe XD", "Protopie", "Maze"],
    },
    {
      title: "Travel Planner",
      category: "Travel",
      image: travelImg,
      problem:
        "Travel planning interfaces are overwhelming with too much information.",
      solution:
        "Designed a clean, visual travel planning experience with smart recommendations.",
      features: [
        "Visual itineraries",
        "Map integration",
        "Collaborative planning",
        "Smart suggestions",
      ],
      tech: ["Figma", "Framer", "Principle", "InVision"],
    },
    {
      title: "Web3 Website",
      category: "Blockchain",
      image: web3Img,
      problem:
        "Web3 interfaces are complex and intimidating for mainstream users.",
      solution:
        "Created an accessible Web3 platform with simplified cryptocurrency interactions.",
      features: [
        "Wallet integration",
        "NFT marketplace",
        "DeFi dashboard",
        "User onboarding",
      ],
      tech: ["Figma", "React", "Web3.js", "Metamask"],
    },
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

        {/* ✅ Web Development Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold">Web Development</h3>
              <p className="text-muted-foreground">
                Full-stack applications and modern web solutions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevelopment.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default ProjectsSection;


import RoadmapSection from "@/components/portfolio/RoadmapSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import Herosections from "@/components/portfolio/Herosection";
import HeroSection from "@/components/portfolio/Herosection";

const Index = () => {
  return (
    <main className="min-h-screen" id="hero">
      <HeroSection/>
      <RoadmapSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
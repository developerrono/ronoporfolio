import HeroSection from "@/components/portfolio/HeroSection";
import RoadmapSection from "@/components/portfolio/RoadmapSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import Navigation from "@/components/portfolio/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen" id="hero">
      <Navigation />
      <HeroSection />
      <RoadmapSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
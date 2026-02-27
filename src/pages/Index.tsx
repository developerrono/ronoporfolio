
import RoadmapSection from "@/components/portfolio/RoadmapSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import Navigation from "@/components/portfolio/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen" id="hero">
      <Navigation />
      <RoadmapSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
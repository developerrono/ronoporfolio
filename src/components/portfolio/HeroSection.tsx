import { Button } from "@/components/ui/button";
import myphoto from "@/assets/myphoto.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Picture on the side */}
          <div className="relative flex-shrink-0">
            <img 
              src={myphoto} 
              alt="Rono - Developer Portfolio" 
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-teal glow-teal object-cover"
            />
            <div className="absolute -top-2 -right-2 text-3xl animate-bounce">👋</div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground to-teal bg-clip-text text-transparent">
              Hi, I'm Rono
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 space-y-2">
              <p className="font-medium text-teal">IT Support | UI/UX Designer | Web Developer</p>
            </div>
            
            <div className="max-w-2xl lg:max-w-none mb-8 space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a passionate developer who loves crafting digital experiences that make a difference. 
                From sleek interfaces to robust backend solutions, I bring ideas to life.
              </p>
              <p>
                Currently exploring the intersection of technology and user experience, 
                building projects that solve real-world problems with clean, modern design.
              </p>
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="btn-hero text-lg px-8 py-4 rounded-xl font-semibold"
              size="lg"
            >
              Let's Work Together 🚀
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import myphoto from "@/assets/myphoto.jpg";
import TextTrail from "@/components/portfolio/TextTrail";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative group">
            <img
              src={myphoto}
              alt="Rono - Developer Portfolio"
              className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex-1 text-center lg:text-left space-y-10"
        >
          {/* Animated TextTrail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative w-full h-[200px] md:h-[220px] flex items-center justify-center lg:justify-start"
          >
            <TextTrail
              text="Hi, I'm Rono"
              fontFamily="Figtree"
              fontWeight="1000"
              noiseFactor={1.4}
              noiseScale={0.0012}
              rgbPersistFactor={0.96}
              alphaPersistFactor={0.93}
              animateColor={true}
              startColor="#ffffff"
              backgroundColor="black"
              colorCycleInterval={1500}
              supersample={2}
            />
          </motion.div>

          <div className="space-y-3">
            <p className="text-lg md:text-xl text-gray-400 tracking-wide">
              IT Support • Designer • Developer
            </p>

            <p className="text-base md:text-lg text-gray-400/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I design and build digital experiences that blend minimalism with
              purpose — clean, modern, and focused on people.
            </p>
          </div>

          {/* Stylish Button */}
          <div>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative rounded-full px-10 py-4 text-lg font-medium bg-white text-black overflow-hidden shadow-md transition-all duration-500"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                Let’s Work Together
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

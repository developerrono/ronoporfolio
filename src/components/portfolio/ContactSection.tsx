import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent! ",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:developer.rono@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/developerrono", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/developer-rono-301589349", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Developer_rono?t=Vy2DpmKlV0WV_ZDnb-TPAg&s=09", label: "Twitter" }
  ];

  return (
    // Set background to deep black
    <section className="py-20 px-6 bg-gray-950" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4 text-white">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a startup looking to build your MVP or an established 
                company needing technical expertise, let's talk!
              </p>
            </div>
            
            {/* Social Links - Updated for Minimalist Tech Look */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Transparent button style with teal border and hover
                    className="flex items-center gap-3 p-4 rounded-xl border border-teal-500/50 hover:border-teal-500 transition-all duration-300 group bg-gray-900 shadow-lg shadow-teal-500/10"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-white group-hover:text-teal-400 transition-colors">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form - Updated for Dark Theme */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-teal-500/30 shadow-2xl shadow-teal-500/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    // Dark inputs with teal focus
                    className="bg-gray-800 border-gray-700 text-white focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="developer.rono@gmail.com"
                    required
                    // Dark inputs with teal focus
                    className="bg-gray-800 border-gray-700 text-white focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project inquiry"
                  required
                  // Dark inputs with teal focus
                  className="bg-gray-800 border-gray-700 text-white focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  // Dark textarea with teal focus
                  className="bg-gray-800 border-gray-700 text-white focus:border-teal-500 focus:ring-teal-500 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                // Strong teal submit button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-teal-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState } from "react";
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

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent.",
      description: "I’ll respond shortly.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:developer.rono@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/developerrono", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/developer-rono-301589349", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Developer_rono", label: "Twitter" },
  ];

  return (
    <section className="py-24 px-6 bg-white text-black" id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-semibold tracking-tight mb-6">
            Let’s Build Something Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Have a project in mind? Let’s discuss how we can build something
            precise, scalable, and intentional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-medium mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 leading-relaxed mb-10">
              I collaborate with founders, traders, and teams building
              thoughtful digital systems. If you’re serious about execution,
              we should talk.
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border border-black px-6 py-4 
                               hover:bg-black hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-wide">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm uppercase tracking-wide mb-3">
                  Name
                </label>
                <Input
                  required
                  className="border border-black bg-white text-black rounded-none focus:ring-0 focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wide mb-3">
                  Email
                </label>
                <Input
                  type="email"
                  required
                  className="border border-black bg-white text-black rounded-none focus:ring-0 focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wide mb-3">
                  Subject
                </label>
                <Input
                  required
                  className="border border-black bg-white text-black rounded-none focus:ring-0 focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wide mb-3">
                  Message
                </label>
                <Textarea
                  rows={6}
                  required
                  className="border border-black bg-white text-black rounded-none focus:ring-0 focus:border-black resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border border-black py-4 text-sm uppercase tracking-wide
                           hover:bg-black hover:text-white transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
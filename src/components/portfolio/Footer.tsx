const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © Rono 2025. All rights reserved.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Built with <span className="text-teal">React</span>, <span className="text-teal">TypeScript</span> & <span className="text-teal">Love</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
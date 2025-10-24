const Footer = () => {
  // Get the current year dynamically for maintenance-free copyright
  const currentYear = new Date().getFullYear();
  
  return (
    // Set background to deep black and border to subtle teal
    <footer className="py-8 px-6 bg-gray-950 border-t border-teal-500/20 shadow-inner shadow-teal-500/5">
      <div className="container mx-auto max-w-6xl">
        {/* Centered content */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © Developer Rono {currentYear}. All rights reserved.
            </p>
            {/* Subtle tech accent for consistency */}
            <p className="text-xs text-teal-600 font-mono mt-1 opacity-75">
              One Of The Great
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
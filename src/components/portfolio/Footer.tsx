const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          
          <p className="text-sm text-gray-600">
            © Developer Rono {currentYear}. All rights reserved.
          </p>

          <p className="text-xs text-gray-400 font-mono mt-2 tracking-wide">
            One Of The Great
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 blur-3xl opacity-40"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Rishi Maskare
        </h1>

        {/* Underline */}
        <div className="w-24 h-0.5 bg-linear-to-r from-green-400 to-blue-500"></div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl mt-2">
          <a href="https://www.linkedin.com/in/rishi-maskare-802022287/" className="hover:text-gray-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/RishiMaskare" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="https://x.com/rishi_maskare" className="hover:text-gray-400 transition">
            <FaXTwitter />
          </a>
        </div>

        {/* Quote */}
        <p className="text-sm italic text-gray-300 mt-2 bg-blue-600/20 px-3 py-1 rounded">
          “Great things are built one line of code at a time.”
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-2">
          © 2025 Rishi Maskare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import { Instagram, Youtube, Linkedin, X } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-black text-white/60 border-t border-white/20 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 items-center">
          <div className="text-center text-sm sm:text-base hover:text-white/80 transition-colors duration-300">
            © 2024 EditVisions, LLC. All rights reserved
          </div>
          <ul className="flex justify-center gap-6">
            <li>
              <a
                href="https://www.instagram.com/damian_fru/"
                className="hover:text-purple-400 transition-all duration-300 transform hover:scale-110 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCvZsYj3d2cmMsECzzZJak6A?sub_confirmation=1"
                className="hover:text-red-500 transition-all duration-300 transform hover:scale-110 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/damian-frunze-466122302/"
                className="hover:text-red-500 transition-all duration-300 transform hover:scale-110 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/EditVision77799"
                className="hover:text-red-500 transition-all duration-300 transform hover:scale-110 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

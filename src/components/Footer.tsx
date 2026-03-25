import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-dark border-t border-neutral-800 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-mono text-xl font-bold text-primary mb-4">Raushan Kumar </h3>
            <p className="text-neutral-400 mb-4 max-w-md">
              AI & ML Engineer with expertise in building intelligent systems and solving complex problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Raushan8431/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/raushan8431/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/Raushan8431" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-neutral-400 hover:text-primary transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-primary transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-neutral-400 hover:text-primary transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-neutral-400 hover:text-primary transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-primary transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-neutral-400">erraushan8431@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-neutral-400">Hi-Tech City, Telagana, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} Zero's Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
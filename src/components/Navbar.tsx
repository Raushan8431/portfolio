import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { useScroll } from '../context/ScrollContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { sections } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 ${
        isScrolled 
          ? 'py-3 bg-background/90 backdrop-blur-md shadow-glow border-b border-primary/20' 
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="font-mono text-xl font-bold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent hover:from-accent hover:via-primary hover:to-purple transition-all duration-300 neon-text"
        >
          [Raushan Kumar]
        </a>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => {
            const isActive = sections[link.name.toLowerCase()];
            const colors = ['#00d4ff', '#ff0080', '#8b5cf6', '#00ff88', '#ffaa00', '#f97316', '#14b8a6'];
            const color = colors[index % colors.length];
            
            return (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`hover:text-white transition-all duration-300 relative text-sm ${
                    isActive ? 'font-medium neon-text' : 'text-neutral-300'
                  }`}
                  style={{ color: isActive ? color : undefined }}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                      style={{ 
                        backgroundColor: color,
                        boxShadow: `0 0 10px ${color}80`
                      }}
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        
        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-5">
          <a 
            href="https://github.com/Raushan8431/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="p-2 rounded-full transition-all duration-300 hover:bg-primary/10 hover:shadow-glow transform hover:scale-110"
          >
            <Github className="w-5 h-5 text-neutral-400 hover:text-primary transition-colors duration-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/raushan8431/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full transition-all duration-300 hover:bg-accent/10 hover:shadow-glow-accent transform hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-neutral-400 hover:text-accent transition-colors duration-300" />
          </a>
          <a 
            href="https://x.com/Raushan8431" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter Profile"
            className="p-2 rounded-full transition-all duration-300 hover:bg-success/10 hover:shadow-glow-success transform hover:scale-110"
          >
            <Twitter className="w-5 h-5 text-neutral-400 hover:text-success transition-colors duration-300" />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-neutral-300 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-background-light/95 backdrop-blur-md border-t border-primary/20 mt-3 rounded-lg mx-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="px-4 py-4 space-y-4">
            {navLinks.map((link, index) => {
              const colors = ['#00d4ff', '#ff0080', '#8b5cf6', '#00ff88', '#ffaa00', '#f97316', '#14b8a6'];
              const color = colors[index % colors.length];
              
              return (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="block py-2 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                    style={{ color }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 flex space-x-6">
              <a 
                href="https://github.com/Raushan8431/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-neutral-400 hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/raushan8431/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full hover:bg-accent/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-neutral-400 hover:text-accent transition-colors duration-300" />
              </a>
              <a 
                href="https://x.com/Raushan8431" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter Profile"
                className="p-2 rounded-full hover:bg-success/10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-neutral-400 hover:text-success transition-colors duration-300" />
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Computer3D from '../components/Computer3D';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

// Typing effect component
const TypedText: React.FC<{ text: string; delay?: number; className?: string }> = ({ 
  text, 
  delay = 100, 
  className = '' 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, Math.random() * delay * 0.5 + delay * 0.5);
      
      return () => clearTimeout(timeout);
    }
  }, [index, text, delay]);

  return (
    <span className={className}>
      {displayText}
      {index < text.length && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  );
};

// Animated stats component
const AnimatedStat: React.FC<{ value: string; label: string; delay: number; color: string }> = ({ 
  value, 
  label, 
  delay,
  color 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div 
        className="text-2xl md:text-3xl font-bold mb-1 neon-text"
        style={{ color }}
      >
        {value}
      </div>
      <div className="text-sm text-neutral-400">
        {label}
      </div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" data-section="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse shadow-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse shadow-glow-accent" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-success rounded-full animate-pulse shadow-glow-success" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-warning rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple rounded-full animate-pulse shadow-glow-purple" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-orange rounded-full animate-pulse shadow-glow-orange" style={{ animationDelay: '0.8s' }} />
      </div>
      
      <div className="section z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border text-sm font-mono mb-4 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 text-primary shadow-glow">
              👋 Hello, I'm available for work
            </span>
          </motion.div>
          
          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">Raushan</span>{' '}
              <span className="font-mono bg-gradient-cyber bg-clip-text text-transparent animate-rainbow">[Kr.]</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-neutral-300"
            >
              <TypedText 
                text="AI/ML Developer & Full-Stack Developer" 
                delay={80}
                className="font-semibold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent"
              />
            </motion.div>
          </div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-neutral-400 max-w-xl leading-relaxed"
          >
             I design intelligent, scalable AI-driven solutions that learn, adapt, and deliver real-world impact.
            Specializing in machine learning model development, data-driven systems, and full-stack AI integration
            with <span className="text-primary font-semibold neon-text">2+ years</span> of experience.
          </motion.p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-3 gap-8 py-6"
          >
            <AnimatedStat value="20+" label="Projects Completed" delay={1.1} color="#00d4ff" />
            <AnimatedStat value="8" label="Certifications" delay={1.2} color="#ff0080" />
            <AnimatedStat value="95%" label="Client Satisfaction" delay={1.3} color="#00ff88" />
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="https://zero's tech.vercel.app/" 
              className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark transition-all duration-300 text-white font-semibold text-lg shadow-glow hover:shadow-glow-accent transform hover:scale-105"
            >
              <span>My Freelancing Platform</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a 
              href="https://qr.me-qr.com/yVeiSbMs22"
              download
              className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-transparent border-2 border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 text-primary hover:text-white transition-all duration-300 font-semibold text-lg hover:shadow-glow transform hover:scale-105"
            >
              <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>View CV</span>
            </a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex items-center gap-6 pt-4"
          >
            <span className="text-neutral-400 text-sm">Connect with me:</span>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Raushan8431/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background-light border border-neutral-700 hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 group transform hover:scale-110 hover:shadow-glow"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/Raushan8431/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background-light border border-neutral-700 hover:border-accent hover:bg-gradient-to-r hover:from-accent/10 hover:to-purple/10 transition-all duration-300 group transform hover:scale-110 hover:shadow-glow-accent"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-accent transition-colors duration-300" />
              </a>
              <a 
                href="mailto:errausahan8431@gmail.com"
                className="p-3 rounded-full bg-background-light border border-neutral-700 hover:border-success hover:bg-gradient-to-r hover:from-success/10 hover:to-teal/10 transition-all duration-300 group transform hover:scale-110 hover:shadow-glow-success"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5 text-neutral-400 group-hover:text-success transition-colors duration-300" />
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right Side - 3D Computer */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[600px] lg:h-[700px]"
        >
          {/* Enhanced Glow effect behind 3D model */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-radial from-purple/15 via-transparent to-success/10 rounded-full blur-2xl animate-pulse" />
          
          {/* 3D Computer Model */}
          <div className="relative z-10 h-full">
            <Computer3D />
          </div>
          
          {/* Enhanced Floating elements around the computer */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 right-10 px-4 py-2 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 shadow-glow"
          >
            <span className="text-primary text-sm font-mono neon-text">Security First</span>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 left-10 px-4 py-2 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-accent/10 to-purple/10 border-accent/30 shadow-glow-accent"
          >
            <span className="text-accent text-sm font-mono neon-text">Full-Stack</span>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-0 px-4 py-2 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-success/10 to-teal/10 border-success/30 shadow-glow-success"
          >
            <span className="text-success text-sm font-mono neon-text">Innovative</span>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-1/3 right-5 px-4 py-2 rounded-lg border backdrop-blur-sm bg-gradient-to-r from-purple/10 to-orange/10 border-purple/30 shadow-glow-purple"
          >
            <span className="text-purple text-sm font-mono neon-text">Creative</span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-neutral-400 text-sm font-mono">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center shadow-glow">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

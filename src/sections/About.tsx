import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Code, Database, Server } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0.8]);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      data-section="about"
      className="section relative"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          className="section-title glitch"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel h-full">
              <div className="flex items-start gap-8 mb-6">
                <img 
                  src="https://i.ibb.co/N2YDppz9/raushanceo.png" 
                  alt="Raushan Kumar"
                  className="w-32 h-32 rounded-lg object-cover border-2 border-primary/30 shadow-glow"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">I'm Raushan Kumar</h3>
                  <div className="flex items-center text-neutral-400 mb-2">
                    <Shield className="w-4 h-4 mr-2 text-primary" />
                    <span>AI & ML Engineer</span>
                  </div>
                  <div className="flex items-center text-neutral-400">
                    <Code className="w-4 h-4 mr-2 text-accent" />
                    <span>Full Stack Developer</span>
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-300 mb-4">
                AI/ML Engineer and Full-Stack Developer with 2+ years of experience building secure, scalable, and production-ready applications.
              </p>
              <p className="text-neutral-300 mb-4">
                Skilled in developing end-to-end machine learning pipelines, model deployment, and integrating AI solutions into modern web systems.
              </p>
              <p className="text-neutral-300">
                Strong focus on performance optimization, security-first architecture, and data-driven problem solving.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Security First</h3>
                <p className="text-neutral-400">
                  Designing intelligent systems using data-driven approaches to solve real-world problems efficiently.
                </p>
              </div>
              
              <div className="glass-panel">
                <Code className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Clean Code</h3>
                <p className="text-neutral-400">
                  Building and optimizing machine learning models with a focus on accuracy, scalability, and performance.
                </p>
              </div>
              
              <div className="glass-panel">
                <Database className="w-12 h-12 text-success mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Data Protection</h3>
                <p className="text-neutral-400">
                  Developing end-to-end ML pipelines from data preprocessing and feature engineering to deployment and monitoring.
                </p>
              </div>
              
              <div className="glass-panel">
                <Server className="w-12 h-12 text-warning mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Full Stack</h3>
                <p className="text-neutral-400">
                  Integrating AI solutions into full-stack applications to deliver seamless, production-ready experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
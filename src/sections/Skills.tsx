import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TechStackGrid from '../components/TechStackGrid';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      data-section="skills"
      className="section relative py-24"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technology Arsenal
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-300 text-center mb-12 max-w-3xl mx-auto text-lg"
        >
          Explore my comprehensive technology stack and expertise across AI/ML engineering, 
        data science, and full-stack development. Each skill reflects hands-on experience 
        in building intelligent, scalable, and production-ready systems.
        </motion.p>

        {/* Detailed Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Technology Expertise Breakdown
            </h3>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Click on each category to explore specific technologies, proficiency levels, 
              and real-world applications in detail.
            </p>
          </div>
          
          <TechStackGrid />
        </motion.div>

        {/* Skills Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Technologies Mastered', value: '25+', color: '#61DAFB' },
              { label: 'Years of Experience', value: '2+', color: '#339933' },
              { label: 'Security Certifications', value: '8', color: '#FF6B6B' },
              { label: 'Projects Completed', value: '20+', color: '#4ECDC4' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel text-center"
              >
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-neutral-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
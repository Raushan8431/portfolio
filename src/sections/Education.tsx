import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

interface EducationItemProps {
  institution: string;
  degree: string;
  field: string;
  year: string;
  cgpa?: string;
  location: string;
  type: 'college' | 'high-school' | 'certification';
  description?: string;
  achievements?: string[];
}

const educationData: EducationItemProps[] = [
  {
    institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
    degree: 'Bachelor of Technology',
    field: 'Computer Science ',
    year: '2020 - 2023',
    cgpa: '7.9/10',
    location: 'Bhopal, MP',
    type: 'University',
    description: 'Focused on AI/ML engineering, software development, and secure system design. Completed advanced coursework in machine learning, deep learning, data structures, distributed systems, and cybersecurity fundamentals.',
    achievements: [
      "Built and deployed end-to-end machine learning models for real-world applications",
      "Developed secure full-stack applications with scalable backend architectures",
      "Implemented model optimization techniques to improve accuracy and performance",
      "Integrated ML models into production environments using REST APIs",
      "Contributed to open-source AI and security-related projects"
    ]
  },
  {
    institution: 'Babasaheb Bhimrao Ambedkar Bihar University',
    degree: 'B.Sc. (Hons.)',
    field: 'Mathematics Specialization',
    year: '2016 - 2019',
    location: 'Muzaffarpur, Bihar',
    type: 'Bihar University',
    description: 'Bachelor of Science in Mathematics with strong foundations in linear algebra, probability, statistics, and calculus. Built analytical and problem-solving skills essential for machine learning and data-driven systems.',
    achievements: [
      "Applied mathematical concepts to machine learning algorithms and data modeling",
      "Worked on statistical analysis and predictive modeling projects"

    ]
  }
];

const EducationCard: React.FC<EducationItemProps> = ({
  institution,
  degree,
  field,
  year,
  cgpa,
  location,
  type,
  description,
  achievements
}) => {
  const getIcon = () => {
    switch (type) {
      case 'college':
        return <GraduationCap className="w-8 h-8 text-primary" />;
      case 'high-school':
        return <BookOpen className="w-8 h-8 text-accent" />;
      case 'certification':
        return <Award className="w-8 h-8 text-success" />;
      default:
        return <GraduationCap className="w-8 h-8 text-primary" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'college':
        return '#00ff00';
      case 'high-school':
        return '#ff00ff';
      case 'certification':
        return '#00ffaa';
      default:
        return '#00ff00';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-panel group relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${getTypeColor()}20 0%, transparent 50%)`
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div 
            className="p-3 rounded-full"
            style={{ backgroundColor: `${getTypeColor()}20` }}
          >
            {getIcon()}
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {institution}
                </h3>
                <p className="text-lg text-neutral-300 font-medium">{degree}</p>
                <p className="text-neutral-400">{field}</p>
              </div>
              
              {cgpa && (
                <div className="text-right">
                  <div 
                    className="text-lg font-bold"
                    style={{ color: getTypeColor() }}
                  >
                    CGPA: {cgpa}
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-neutral-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{year}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            </div>
            
            {description && (
              <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
                {description}
              </p>
            )}
            
            {achievements && achievements.length > 0 && (
              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {achievements.map((achievement, index) => (
                    <li 
                      key={index}
                      className="text-neutral-300 text-sm flex items-start gap-2"
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: getTypeColor() }}
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef} 
      id="education" 
      data-section="education"
      className="section relative py-24"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-neutral-300 mb-12 max-w-3xl"
        >
          My educational journey in mathematics and computer science built a strong foundation 
          in analytical thinking, statistical modeling, and algorithm design—core pillars of AI 
          and machine learning.
        </motion.p>
        
        <div className="space-y-6">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <EducationCard {...education} />
            </motion.div>
          ))}
        </div>

        {/* Education Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                label: 'Academic Excellence', 
                value: 'Magna Cum Laude', 
                color: '#00ff00',
                icon: <Award className="w-6 h-6" />
              },
              { 
                label: 'Research Experience', 
                value: '2 Years', 
                color: '#ff00ff',
                icon: <BookOpen className="w-6 h-6" />
              },
              { 
                label: 'Leadership Roles', 
                value: '3 Positions', 
                color: '#00ffaa',
                icon: <GraduationCap className="w-6 h-6" />
              }
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
                  className="flex justify-center mb-3"
                  style={{ color: stat.color }}
                >
                  {stat.icon}
                </div>
                <div 
                  className="text-2xl font-bold mb-2"
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

export default Education;
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface CertificationProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  link: string;
}

const certifications: CertificationProps[] = [
  {
    title: 'Full Stack Data Science and AI Cartificate',
    organization: 'Naresh IT',
    date: 'December 2023',
    description: 'Advanced certification covering ethical hacking methodologies, tools, and techniques to identify and address security vulnerabilities.',
    link: 'https://www.eccouncil.org/train-certify/certified-ethical-hacker-cehlkjn/'
  },
  {
    title: 'Machine Learning ',
    organization: 'Dataflair',
    date: '2024',
    description: 'Demonstrates expertise across various domains of information security, including security architecture, risk management, and cryptography, Web Pentester.',
    link: 'https://www.canva.com/design/DAGrHfUsBbE/rQBOUXamMkv9YycmncsGXA/view?utm_content=DAGrHfUsBbE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf62b1b3092jj'
  },
  {
    title: 'Python',
    organization: 'Naresh IT',
    date: 'August 2023',
    description: 'Certificate for completing all the lessons and practice projects in Learn Python.',
    link: 'https://www.codechef.com/certificates/public/469834elkj'
  },
  {
    title: 'C',
    organization: 'Naresh IT',
    date: 'May 2022',
    description: 'Certificate for completing all the lessons in C++ for problem solving - 1.',
    link: 'https://www.codechef.com/certificates/public/2eb920dh'
  },
];

const CertificationCard: React.FC<CertificationProps> = ({
  title,
  organization,
  date,
  description,
  link
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-panel group"
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 rounded-full p-3 mt-1">
          <Award className="w-6 h-6 text-primary" />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
          <div className="flex items-center text-neutral-400 mt-1 mb-3">
            <span className="font-medium">{organization}</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{date}</span>
            </div>
          </div>
          
          <p className="text-neutral-300 mb-4 text-sm">{description}</p>
          
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-light transition-colors duration-300"
          >
            <span>View Certification</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef} 
      id="certifications" 
      data-section="certifications"
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
          Certifications
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-neutral-300 mb-12 max-w-3xl"
        >
          Professional certifications that validate my expertise in Data Scientist, software development, and cloud technologies.
        </motion.p>
        
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
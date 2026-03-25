import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Github, ExternalLink, Lock, Server, MonitorSmartphone } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  category: 'AI/ML' | 'web' | 'application';
}

const projects: ProjectProps[] = [
  {
    title: 'Stock Management System – Smart Inventory Solution',
    description: 'A Python desktop inventory tool to manage products, suppliers, stock levels, and transactions with real-time reporting.',
    image: 'https://images.pexels.com/photos/4386369/pexels-photo-4386369.jpeg',
    tags: ['Python', 'Tkinter', 'SQLite', 'Pandas', 'Matplotlib'],
    demoLink: 'https://github.com/Raushan8431',
    githubLink: 'https://github.com/Raushan8431',
    category: 'application'
  },
  {
    title: 'Face Recognition Attendance System',
    description: 'A face recognition-based secure attendance system using OpenCV, offering contactless authentication and real-time tracking.',
    image: 'https://empmonitor.com/blog/wp-content/uploads/2024/11/What-Is-a-Facial-Recognition-Attendance-System-1024x576.webp',
    tags: ['OpenCV', 'face_recognition', 'Python', 'Tkinter', 'SQLite'],
    demoLink: 'https://github.com/Raushan8431',
    githubLink: 'https://github.com/Raushan8431',
    category: 'application'
  },
  {
  title: 'AI-Powered Intelligent Chatbot',
  description: 'A context-aware AI chatbot built using LLM integration, capable of handling dynamic conversations, maintaining session context, and providing accurate, real-time responses.',
  image: 'https://miro.medium.com/v2/resize:fit:1400/1*9iE5w6Q2qGQkY0Xk7gF0Qg.png',
  tags: ['Python', 'FastAPI', 'LLM', 'NLP', 'Streamlit', 'REST API'],
  demoLink: 'https://github.com/Raushan8431',
  githubLink: 'https://github.com/Raushan8431',
  category: 'application'
  }
];

const ProjectCard: React.FC<ProjectProps> = ({ 
  title,
  description,
  image,
  tags,
  demoLink,
  githubLink,
  category
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Category icon
  const CategoryIcon = () => {
    switch (category) {
      case 'AI/ML':
        return <Lock className="w-5 h-5 text-primary" />;
      case 'web':
        return <Globe className="w-5 h-5 text-primary" />;
      case 'application':
        return <MonitorSmartphone className="w-5 h-5 text-primary" />;
      default:
        return <Server className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <motion.div
      className="card overflow-hidden group relative transition-all duration-300"
      whileHover={{ y: -5 }}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
        
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <div className="flex items-center gap-2 mb-2">
            <CategoryIcon />
            <span className="text-xs text-neutral-300">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-neutral-400 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="badge"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="glow-effect rounded-md px-3 py-1.5 flex items-center gap-1 text-sm text-primary border border-primary/30 hover:border-primary/60"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="glow-effect-accent rounded-md px-3 py-1.5 flex items-center gap-1 text-sm text-accent border border-accent/30 hover:border-accent/60"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        </div>
      </div>
      
      {/* 3D Effect Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none border border-primary/0 rounded-lg"
        animate={{ 
          borderColor: isHovered ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0)',
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'security' | 'web' | 'application'>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section 
      ref={sectionRef} 
      id="projects" 
      data-section="projects"
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
          Projects
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex p-1 rounded-lg bg-background-light">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                filter === 'all' ? 'bg-primary text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('security')}
              className={`px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                filter === 'security' ? 'bg-primary text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Security
            </button>
            <button 
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                filter === 'web' ? 'bg-primary text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setFilter('application')}
              className={`px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                filter === 'application' ? 'bg-primary text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              application
            </button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/Raushan8431/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent hover:bg-accent-dark transition-colors duration-300 text-white font-medium"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
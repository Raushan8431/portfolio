import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Shield, 
  Cloud, 
  Database, 
  Settings, 
  Monitor,
  Server,
  Lock,
  Globe,
  Cpu,
  HardDrive,
  Network,
  Wrench,
  Brain,
  Terminal,
  GitBranch,
  Zap
} from 'lucide-react';

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  technologies: {
    name: string;
    level: number;
    description: string;
    icon: React.ReactNode;
  }[];
}
const techCategories: TechCategory[] = [
  {
    name: 'Machine Learning & AI',
    icon: <Brain className="w-6 h-6" />,
    color: '#00d4ff',
    glowColor: 'shadow-glow',
    technologies: [
      {
        name: 'Scikit-learn',
        level: 90,
        description: 'Supervised & unsupervised learning, model evaluation, feature engineering',
        icon: <Code className="w-5 h-5" />
      },
      {
        name: 'TensorFlow / PyTorch',
        level: 85,
        description: 'Deep learning, neural networks, and model optimization',
        icon: <Cpu className="w-5 h-5" />
      },
      {
        name: 'Computer Vision',
        level: 85,
        description: 'OpenCV, face recognition, image processing systems',
        icon: <Monitor className="w-5 h-5" />
      },
      {
        name: 'NLP & LLM Integration',
        level: 80,
        description: 'Chatbots, transformers, prompt engineering, AI APIs',
        icon: <Network className="w-5 h-5" />
      }
    ]
  },
  {
    name: 'Data Science & Engineering',
    icon: <Database className="w-6 h-6" />,
    color: '#ff0080',
    glowColor: 'shadow-glow-accent',
    technologies: [
      {
        name: 'Pandas & NumPy',
        level: 90,
        description: 'Data preprocessing, transformation, numerical computing',
        icon: <Code className="w-5 h-5" />
      },
      {
        name: 'Statistics & Probability',
        level: 85,
        description: 'Model evaluation, hypothesis testing, data analysis',
        icon: <Brain className="w-5 h-5" />
      },
      {
        name: 'SQL',
        level: 85,
        description: 'Efficient querying and data optimization',
        icon: <Database className="w-5 h-5" />
      },
      {
        name: 'Feature Engineering',
        level: 80,
        description: 'Data cleaning and feature extraction pipelines',
        icon: <Settings className="w-5 h-5" />
      }
    ]
  },
  {
    name: 'Backend & Model Deployment',
    icon: <Server className="w-6 h-6" />,
    color: '#8b5cf6',
    glowColor: 'shadow-glow-purple',
    technologies: [
      {
        name: 'Python',
        level: 90,
        description: 'ML systems, automation, backend APIs',
        icon: <Code className="w-5 h-5" />
      },
      {
        name: 'FastAPI / Flask',
        level: 85,
        description: 'High-performance AI model serving APIs',
        icon: <Globe className="w-5 h-5" />
      },
      {
        name: 'Microservices',
        level: 80,
        description: 'Scalable distributed AI architectures',
        icon: <Network className="w-5 h-5" />
      },
      {
        name: 'REST APIs',
        level: 85,
        description: 'Production-ready AI integrations',
        icon: <Server className="w-5 h-5" />
      }
    ]
  },
  {
    name: 'Cloud & MLOps',
    icon: <Cloud className="w-6 h-6" />,
    color: '#00ff88',
    glowColor: 'shadow-glow-success',
    technologies: [
      {
        name: 'AWS',
        level: 85,
        description: 'Cloud deployment for AI applications',
        icon: <Cloud className="w-5 h-5" />
      },
      {
        name: 'Docker',
        level: 85,
        description: 'Containerized ML environments',
        icon: <Settings className="w-5 h-5" />
      },
      {
        name: 'CI/CD',
        level: 80,
        description: 'Automated testing and deployment workflows',
        icon: <GitBranch className="w-5 h-5" />
      },
      {
        name: 'Model Monitoring',
        level: 75,
        description: 'Tracking performance and model versioning',
        icon: <Cpu className="w-5 h-5" />
      }
    ]
  },
  {
    name: 'Frontend & AI Integration',
    icon: <Monitor className="w-6 h-6" />,
    color: '#ffaa00',
    glowColor: 'shadow-glow-orange',
    technologies: [
      {
        name: 'React',
        level: 90,
        description: 'Interactive dashboards and AI-driven interfaces',
        icon: <Code className="w-5 h-5" />
      },
      {
        name: 'Next.js',
        level: 85,
        description: 'Full-stack AI web applications',
        icon: <Globe className="w-5 h-5" />
      },
      {
        name: 'TypeScript',
        level: 85,
        description: 'Scalable and type-safe frontend architecture',
        icon: <Code className="w-5 h-5" />
      }
    ]
  },
  {
    name: 'Tools',
    icon: <Wrench className="w-6 h-6" />,
    color: '#f97316',
    glowColor: 'shadow-glow-orange',
    technologies: [
      {
        name: 'Git',
        level: 95,
        description: 'Version control and collaborative development workflows',
        icon: <GitBranch className="w-5 h-5" />
      },
      {
        name: 'VS Code',
        level: 90,
        description: 'Advanced IDE configuration and extension development',
        icon: <Code className="w-5 h-5" />
      },
      {
        name: 'Postman',
        level: 85,
        description: 'API testing, documentation, and automation',
        icon: <Zap className="w-5 h-5" />
      },
      {
        name: 'Jenkins',
        level: 80,
        description: 'CI/CD pipeline automation and deployment',
        icon: <Settings className="w-5 h-5" />
      }
    ]
  },
  {
    name: 'Others',
    icon: <Brain className="w-6 h-6" />,
    color: '#14b8a6',
    glowColor: 'shadow-glow-teal',
    technologies: [
      {
        name: 'AI/ML Basics',
        level: 75,
        description: 'Machine learning fundamentals and model implementation',
        icon: <Brain className="w-5 h-5" />
      },
      {
        name: 'Linux',
        level: 90,
        description: 'System administration and command-line expertise',
        icon: <Terminal className="w-5 h-5" />
      },
      {
        name: 'Kali Linux',
        level: 85,
        description: 'Penetration testing and security assessment tools',
        icon: <Shield className="w-5 h-5" />
      },
      {
        name: 'Burp Suite',
        level: 80,
        description: 'Web application security testing platform',
        icon: <Lock className="w-5 h-5" />
      }
    ]
  }
];

const TechStackGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="w-full space-y-8">
      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`glass-panel cursor-pointer transition-all duration-300 ${
              selectedCategory === category.name 
                ? `ring-2 bg-gradient-to-br from-background-light to-background-dark ${category.glowColor}` 
                : 'hover:bg-background-light/50'
            }`}
            style={{
              borderColor: selectedCategory === category.name ? category.color : undefined
            }}
            onClick={() => setSelectedCategory(
              selectedCategory === category.name ? null : category.name
            )}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="p-3 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: `${category.color}20`,
                  boxShadow: selectedCategory === category.name ? `0 0 20px ${category.color}40` : undefined
                }}
              >
                <div style={{ color: category.color }}>
                  {category.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white">{category.name}</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {category.technologies.slice(0, 3).map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 p-2 rounded-md bg-background-dark/50 transition-all duration-300 hover:bg-background-dark/70"
                >
                  <div style={{ color: category.color }}>
                    {tech.icon}
                  </div>
                  <span className="text-sm text-neutral-300">{tech.name}</span>
                  <span 
                    className="ml-auto text-xs px-1.5 py-0.5 rounded font-semibold"
                    style={{ 
                      backgroundColor: `${category.color}20`,
                      color: category.color,
                      boxShadow: `0 0 10px ${category.color}30`
                    }}
                  >
                    {tech.level}%
                  </span>
                </div>
              ))}
              {category.technologies.length > 3 && (
                <div className="text-center text-xs text-neutral-400 mt-1">
                  +{category.technologies.length - 3} more
                </div>
              )}
            </div>
            
            <div className="mt-4 text-center">
              <span className="text-sm font-medium" style={{ color: category.color }}>
                {selectedCategory === category.name ? 'Click to collapse' : 'Click to expand'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Category Details */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            {techCategories
              .filter(cat => cat.name === selectedCategory)
              .map((category) => (
                <div key={category.name} className="glass-panel" style={{ borderColor: category.color }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="p-4 rounded-full"
                      style={{ 
                        backgroundColor: `${category.color}20`,
                        boxShadow: `0 0 30px ${category.color}40`
                      }}
                    >
                      <div style={{ color: category.color }}>
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                      <p className="text-neutral-400">Detailed breakdown of skills and expertise</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          hoveredTech === tech.name
                            ? 'bg-gradient-to-br from-background-light to-background-dark transform scale-105'
                            : 'bg-background-dark/50'
                        }`}
                        style={{
                          borderColor: hoveredTech === tech.name ? category.color : 'rgba(100, 116, 139, 0.3)',
                          boxShadow: hoveredTech === tech.name ? `0 10px 30px ${category.color}30` : undefined
                        }}
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div style={{ color: category.color }}>
                            {tech.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-white">{tech.name}</h4>
                          <span 
                            className="ml-auto text-sm font-bold px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: `${category.color}20`,
                              color: category.color,
                              boxShadow: `0 0 15px ${category.color}30`
                            }}
                          >
                            {tech.level}%
                          </span>
                        </div>
                        
                        <p className="text-neutral-300 text-sm mb-3">{tech.description}</p>
                        
                        <div className="w-full bg-background-dark rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-2 rounded-full relative"
                            style={{ 
                              background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                              boxShadow: `0 0 10px ${category.color}50`
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: techIndex * 0.1 }}
                          >
                            <div 
                              className="absolute inset-0 animate-pulse"
                              style={{ 
                                background: `linear-gradient(90deg, transparent, ${category.color}40, transparent)`,
                                animation: 'shimmer 2s infinite'
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechStackGrid;
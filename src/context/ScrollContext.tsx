import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  sections: {
    [key: string]: boolean;
  };
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollDirection: null,
  sections: {},
});

export const useScroll = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [sections, setSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      setScrollDirection(prevScrollY < currentScrollY ? 'down' : 'up');
      setPrevScrollY(currentScrollY);
      
      // Check which sections are in view
      const sectionElements = document.querySelectorAll('[data-section]');
      const viewportSections: Record<string, boolean> = {};
      
      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionName = section.getAttribute('data-section') || '';
        
        // Consider a section in view if its top is within the viewport
        // or if it takes up most of the viewport
        const isInView = 
          (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) ||
          (rect.top >= 0 && rect.top <= window.innerHeight * 0.25);
        
        viewportSections[sectionName] = isInView;
      });
      
      setSections(viewportSections);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <ScrollContext.Provider value={{ scrollY, scrollDirection, sections }}>
      {children}
    </ScrollContext.Provider>
  );
};
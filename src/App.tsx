import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import { ScrollProvider } from './context/ScrollContext';
import Cursor from './components/Cursor';

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollProvider>
      <Cursor />
      <div ref={mainRef} className="min-h-screen bg-background relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <Terminal />
      </div>
    </ScrollProvider>
  );
}

export default App;
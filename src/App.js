import React, { useEffect, useState } from 'react';

import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contactme from './components/Contact/Contactme';
import Footer from './components/footer/Footer';
import SideContent from './components/UI/sidecontent/SideContent';
import Navbar from './components/navbar/Navbar';
import Loader from './components/loader/Loader';

import './App.css';
import "./index.css";

function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect( () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    setIsLoaded(false);
  }, []);

  useEffect( () => {
    const timer = setTimeout(() => {
      const allSections = document.querySelectorAll('.section');
  
      const revealSection = function(entries, observer){
        const [entry] = entries;
  
        if(!entry.isIntersecting) return;
  
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
      }
  
      const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15
      });
  
      allSections.forEach(function(section) {
        sectionObserver.observe(section);
        section.classList.add('section--hidden');
      })
    }, 2100);

    return () => {
      clearInterval(timer);
    }
  }, []);
  

  return (
    <>
      { !isLoaded && <Loader />}
      {isLoaded && <section className="container">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contactme />
        <SideContent />
      </section>}
      {isLoaded && <Footer />}
    </>
  );
}

export default App;

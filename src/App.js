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
      <Footer />
    </>
  );
}

export default App;

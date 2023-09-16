import { useState, useContext, createContext } from 'react';
import React from 'react';
import Landing from './sections/Landing';
import About from './sections/About'
import Footer from './sections/Footer';
import Projects from './sections/Projects';
import Challenges from './sections/Challenges';
import Skills from './sections/Skills';
export const Context = createContext();

export default function App() {
  const [language, setLanguage] = useState(true);

  return (
    <>
      <Context.Provider value={[language, setLanguage]}>
        <Landing />
        <About />
        <Skills/>
        <Projects/>
        <Challenges/>
        <Footer/>
      </Context.Provider>
    </>
  );
}

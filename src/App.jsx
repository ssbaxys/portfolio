import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SkillsGrid from './components/SkillsGrid';
import AiSkills from './components/AiSkills';
import Journey from './components/Journey';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <>
      <MatrixBackground />
      <Hero />
      <About />
      <SkillsGrid />
      <AiSkills />
      <Journey />
    </>
  );
}

export default App;

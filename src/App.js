import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects'; // Import the Projects component
import Experience from './components/Experience'; // Import the Experience section
import Articles from './components/Articles'; // Import the Contact section
import Footer from './components/Footer'; // Import the Contact section
import './components/scrollbar.css';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Skills />
      <Projects /> {/* Add Projects section here */}
      <Experience /> {/* Add Experience section here */}
      <Articles /> {/* Add Experience section here */}
      <Footer /> {/* Add Experience section here */}
    </div>
  );
}

export default App;



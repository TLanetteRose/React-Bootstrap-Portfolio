import React, { Component } from 'react';
/*import './style/App.css';*/

import CustomNavbar from './components/CustomNavbar';

import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


export class App extends Component {
  render() {
    return (
      <>
        <main>
          <CustomNavbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </>
    )
  }
}

export default App

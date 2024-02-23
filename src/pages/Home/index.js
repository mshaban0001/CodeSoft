import React from 'react';
import Header from '../../components/layout/header';
import Intro from '../../components/intro';
import About from '../../components/about';
import Resume from '../../components/resume';
import Services from '../../components/services';
import Projects from '../../components/projects';
import Contact from '../../components/contact';
import Footer from '../../components/layout/footer';

const Home = () => {
  return (
    <>
      <div id='hero'>
        <Header />
        <Intro />
        <About />
        <Resume />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;

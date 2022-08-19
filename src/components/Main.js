import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import Section from './Section';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Experience from './Experience';
import Footer from './Footer';

import './Main.scss';

const Main = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const arrow = <FontAwesomeIcon icon={faAngleUp} size="2x" />;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 700) setShowScrollToTop(true);
      else setShowScrollToTop(false);
    });
  }, []);

  return (
    <div className="main" id="main" data-spy="scroll">
      <Section className="kh" id="kh" name="kh">
        <About />
      </Section>
      <Section className="experience" id="experience" name="experience">
        <Experience />
      </Section>
      <Section className="contact" id="contact" name="contact">
        <Contact />
      </Section>
      <Section className="skills" id="skills" name="skills">
        <Skills />
      </Section>
      <Footer />
      <Fade duration={300} when={showScrollToTop} spy={showScrollToTop} bottom>
        <div className="scroll-to-top" style={{ pointerEvents: showScrollToTop ? 'auto' : 'none' }}>
          <Link to="kh" spy smooth duration={500} offset={-60}>
            {arrow}
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Main;

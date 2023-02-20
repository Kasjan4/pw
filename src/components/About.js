import React, { Fragment, useEffect, useState } from 'react';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';

import Socials from './Socials';

import './About.scss';

const About = () => {
  const [stopped, setStopped] = useState(true);

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setStopped(false);
    }, 1750);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fragment>
      <p>
        <Typed
          strings={['Hello,', 'Cześć,', 'नमस्ते,', 'Bonjour,', 'Olá,', "<span dir='rtl'>مرحبا</span>"]}
          typeSpeed={120}
          backSpeed={100}
          style={{ color: '#fff' }}
          stopped={stopped}
          key={stopped}
          loop
        />
        <Fade delay={200}>
          <span>&nbsp;my name is</span>
        </Fade>
      </p>

      <Fade delay={200}>
        <h1>Kasjan Hinc</h1>
      </Fade>

      <div className="role-container">
        <span>
          <Fade delay={500}>Frontend</Fade>
        </span>
        <span>
          <Fade delay={700}>Developer</Fade>
        </span>
      </div>

      <Socials />
    </Fragment>
  );
};

export default About;

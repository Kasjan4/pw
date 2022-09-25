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
        &nbsp;my name is
      </p>
      <Fade delay={200}>
        <h1>Kasjan Hinc</h1>
      </Fade>
      <Fade delay={500} down>
        <p>
          Software <span>Developer</span>
        </p>
      </Fade>

      <Socials />
    </Fragment>
  );
};

export default About;

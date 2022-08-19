import React, { Fragment, useEffect, useState } from 'react';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import './About.scss';

const About = () => {
  const [stopped, setStopped] = useState(true);

  const linkedin = <FontAwesomeIcon icon={faLinkedinIn} size="2x" />;
  const github = <FontAwesomeIcon icon={faGithub} size="2x" />;

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
        <h1>
          <span>Kasjan</span> Hinc
        </h1>
      </Fade>
      <Fade delay={500} down>
        <p>
          Software <span>Developer</span>
        </p>
      </Fade>

      <div className="social-icons">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/kasjan-hinc/" target="_blank" rel="noreferrer">
            {linkedin}
          </a>
        </div>
        <div className="social-icon">
          <a href="https://github.com/Kasjan4" target="_blank" rel="noreferrer">
            {github}
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

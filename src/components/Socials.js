import React from 'react';
import Pulse from 'react-reveal/Pulse';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Socials.scss';

const Socials = () => {
  const linkedin = <FontAwesomeIcon icon={faLinkedinIn} size="2x" />;
  const github = <FontAwesomeIcon icon={faGithub} size="2x" />;

  return (
    <div className="social-icons">
      <Pulse delay={200}>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/kasjan-hinc/" name="LinkedIn" target="_blank" rel="noreferrer">
            {linkedin}
          </a>
        </div>
      </Pulse>
      <Pulse delay={400}>
        <div className="social-icon">
          <a href="https://github.com/Kasjan4" name="GitHub" target="_blank" rel="noreferrer">
            {github}
          </a>
        </div>
      </Pulse>
    </div>
  );
};

export default Socials;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  const linkedin = <FontAwesomeIcon icon={faLinkedinIn} size="2x" />;
  const github = <FontAwesomeIcon icon={faGithub} size="2x" />;

  return (
    <div className="social-icons">
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/kasjan-hinc/" name="LinkedIn" target="_blank" rel="noreferrer">
          {linkedin}
        </a>
      </div>
      <div className="social-icon">
        <a href="https://github.com/Kasjan4" name="GitHub" target="_blank" rel="noreferrer">
          {github}
        </a>
      </div>
    </div>
  );
};

export default Socials;

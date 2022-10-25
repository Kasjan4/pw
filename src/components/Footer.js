import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = () => {
  const react = <FontAwesomeIcon icon={faReact} size="1x" />;
  return (
    <Fade up>
      <footer>
        <div className="footer__copyright">© Kasjan Hinc, All Rights Reserved</div>
        <div className="footer__legend">
          powered by{' '}
          <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noreferrer">
            {react}
          </a>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;

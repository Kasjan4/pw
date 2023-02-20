import React from 'react';
import Fade from 'react-reveal/Fade';

import './Footer.scss';

const Footer = () => {
  return (
    <Fade up>
      <footer>
        <div className="footer__copyright">
          <span>©</span> Kasjan Hinc, <span>All Rights Reserved</span>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;

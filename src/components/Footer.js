import React from 'react';
import Fade from 'react-reveal/Fade';

import './Footer.scss';

const Footer = () => (
  <Fade up>
    <footer>
      <div className="footer__copyright">© Kasjan Hinc, All Rights Reserved</div>
      <div className="footer__legend">
        powered by <span>KH</span>
      </div>
    </footer>
  </Fade>
);

export default Footer;

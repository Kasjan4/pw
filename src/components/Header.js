import React, { useState, Fragment } from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import Bounce from 'react-reveal/Bounce';
import { lock, unlock } from 'tua-body-scroll-lock';
import { useMediaQuery } from 'react-responsive';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Header.scss';

const Header = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [dotVisible, setDotVisible] = useState(false);
  const elementOne = document.querySelector('#nav-ref');

  const isMobile = useMediaQuery({
    query: '(max-width: 992px)',
  });

  const dot = <FontAwesomeIcon icon={faCircle} size="xs" />;
  const linkedin = <FontAwesomeIcon icon={faLinkedinIn} size="2x" />;
  const github = <FontAwesomeIcon icon={faGithub} size="2x" />;

  const handleToggle = (e) => {
    e.preventDefault();

    if (isMobile) {
      toggleOpen ? unlock(elementOne) : lock(elementOne);
      setToggleOpen(!toggleOpen);
    }
    return;
  };

  return (
    <Fragment>
      <header className="header">
        <nav className="header__nav">
          <Fade duration={500} when={dotVisible} spy={dotVisible} left>
            <Link
              className="header__nav-item--dot"
              activeClass="header__nav-item--dot--active"
              to="kh"
              spy
              smooth
              duration={500}
              offset={-100}
              onSetActive={() => setDotVisible(true)}
              onSetInactive={() => setDotVisible(false)}
            >
              {dot}
            </Link>
          </Fade>
          <Fade right>
            <Link
              className="header__nav-item"
              activeClass="header__nav-item--active"
              to="skills"
              spy
              smooth
              duration={500}
              offset={-50}
            >
              Skills
            </Link>
          </Fade>
          <Fade right delay={200}>
            <Link
              className="header__nav-item"
              activeClass="header__nav-item--active"
              to="experience"
              spy
              smooth
              duration={500}
              offset={-50}
            >
              Experience
            </Link>
          </Fade>
          <Fade right delay={400}>
            <Link
              className="header__nav-item"
              activeClass="header__nav-item--active"
              style={{ marginRight: 0 }}
              to="contact"
              spy
              smooth
              duration={500}
              offset={-50}
            >
              Contact
            </Link>
          </Fade>
        </nav>

        <Fade delay={200} right>
          <button className="nav__toggle" onClick={(e) => handleToggle(e)}>
            <div
              className="nav__toggle-big"
              style={{
                transform: toggleOpen ? 'translateY(5px) scaleX(0.7) rotate(-35deg) translateZ(0px)' : 'none',
              }}
            ></div>
            <div
              className="nav__toggle-small"
              style={{
                transform: toggleOpen
                  ? 'translateX(-5px) translateY(1px) scaleX(0.7) rotate(35deg) translateZ(0px)'
                  : 'translateX(0px) translateY(0px) scaleX(0.7) rotate(0deg) translateZ(0px)',
              }}
            ></div>
          </button>
        </Fade>
      </header>

      <div
        className="nav"
        style={{ transform: toggleOpen ? 'none' : 'translateX(-100vw) translateZ(0px)' }}
        id="nav-ref"
      >
        <nav className="nav__item-wrapper">
          <Fade appear when={toggleOpen} left>
            <Link
              className="nav__item--dot"
              activeClass="nav__item--dot--active"
              to="kh"
              spy
              smooth
              duration={500}
              offset={-60}
            >
              {dot}
            </Link>
          </Fade>
          <Fade appear when={toggleOpen} delay={200} left>
            <Link
              className="nav__item"
              activeClass="nav__item--active"
              to="skills"
              spy
              smooth
              duration={500}
              offset={-60}
              onClick={(e) => handleToggle(e)}
            >
              Skills
            </Link>
          </Fade>
          <Fade appear when={toggleOpen} delay={200} left>
            <Link
              className="nav__item"
              activeClass="nav__item--active"
              to="experience"
              spy
              smooth
              duration={500}
              offset={-60}
              onClick={(e) => handleToggle(e)}
            >
              Experience
            </Link>
          </Fade>
          <Fade appear when={toggleOpen} delay={400} left>
            <Link
              className="nav__item"
              activeClass="nav__item--active"
              to="contact"
              spy
              smooth
              duration={500}
              offset={-60}
              onClick={(e) => handleToggle(e)}
            >
              Contact
            </Link>
          </Fade>
          <footer className="nav__footer">
            <div className="social-icons">
              <Bounce when={toggleOpen} duration={1250} delay={200} bottom>
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/kasjan-hinc/" name="LinkedIn" target="_blank" rel="noreferrer">
                    {linkedin}
                  </a>
                </div>
              </Bounce>
              <Bounce when={toggleOpen} duration={1250} delay={300} bottom>
                <div className="social-icon">
                  <a href="https://github.com/Kasjan4" name="GitHub" target="_blank" rel="noreferrer">
                    {github}
                  </a>
                </div>
              </Bounce>
            </div>
          </footer>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;

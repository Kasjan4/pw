import React, { Fragment, useState } from 'react';
import { scroller } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import Fade from 'react-reveal/Fade';
import ClipLoader from 'react-spinners/ClipLoader';
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import { apiKeys } from '../emailjs';

import './Contact.scss';

const Contact = () => {
  const linkedin = <FontAwesomeIcon icon={faLinkedinIn} size="2x" />;
  const github = <FontAwesomeIcon icon={faGithub} size="2x" />;

  const [showLoader, setShowLoader] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isBreakpointL = useMediaQuery({
    query: '(min-width: 992px)',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const isChecked = document.getElementById('checkbox').checked;

    if (isChecked) return;

    setShowLoader(true);

    emailjs.sendForm(apiKeys.serviceID, apiKeys.templateID, e.target, apiKeys.userID).then(
      () => {
        document.getElementById('form').reset();
        setShowLoader(false);
        setFormSubmitted(true);

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  const handleInputOnFocus = () =>
    scroller.scrollTo('contact', {
      spy: true,
      smooth: true,
      duration: 500,
      offset: -60,
    });

  return (
    <Fragment>
      <div className="contact-panel">
        <Fade delay={200}>
          <h2>Get in touch</h2>
        </Fade>
        <p>If you have enquiries regarding employment, my CV, or something else, I'm waiting for your message.</p>
        <form className="contact-panel__form" id="form" onSubmit={handleSubmit}>
          <div className="contact-panel__buttons">
            <div className="contact-panel__email">
              <input
                type="email"
                name="email"
                label="email"
                placeholder="yourname@email.com"
                disabled={formSubmitted}
                onFocus={isBreakpointL ? handleInputOnFocus : () => {}}
                required
              />
            </div>

            <div className="contact-panel__textarea">
              <textarea
                name="message"
                label="message"
                minLength="15"
                disabled={formSubmitted}
                onFocus={isBreakpointL ? handleInputOnFocus : () => {}}
                required
              />
            </div>

            <input type="checkbox" id="checkbox" name="Terms" />

            <button className="input" type="submit">
              {showLoader && <ClipLoader color="#ffffff" loading size={30} />}
              {!showLoader && (formSubmitted ? 'Message has been sent' : 'Send')}
            </button>
          </div>
        </form>
      </div>
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

export default Contact;

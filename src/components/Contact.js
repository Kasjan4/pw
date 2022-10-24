import React, { Fragment, useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Fade from 'react-reveal/Fade';
import ClipLoader from 'react-spinners/ClipLoader';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheck } from '@fortawesome/free-solid-svg-icons';

import Socials from './Socials';

import { apiKeys } from '../emailjs';

import './Contact.scss';

const Contact = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const submit = <FontAwesomeIcon icon={faPaperPlane} size="2x" />;
  const check = <FontAwesomeIcon icon={faCheck} size="2x" />;
  const smallCheck = <FontAwesomeIcon icon={faCheck} size="1x" />;

  const isBreakpointL = useMediaQuery({
    query: '(min-width: 992px)',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const isChecked = document.getElementById('checkbox').checked;

    if (formSubmitted || isChecked) return;
    setFormData(e.target);
    setFormSubmitted(true);
    setShowLoader(true);
  };

  useEffect(() => {
    if (formSubmitted) {
      emailjs.sendForm(apiKeys.serviceID, apiKeys.templateID, formData, apiKeys.userID).then(
        () => {
          document.getElementById('form').reset();
          setShowLoader(false);

          setTimeout(() => {
            setFormData(null);
            setFormSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log(error);
        },
      );
    }
  }, [formSubmitted]);

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
                minLength="6"
                maxLength="50"
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
                maxLength="500"
                disabled={formSubmitted}
                onFocus={isBreakpointL ? handleInputOnFocus : () => {}}
                required
              />
            </div>

            <input type="checkbox" id="checkbox" name="Terms" />

            <button className="input" type="submit" disabled={formSubmitted}>
              {showLoader && <ClipLoader color="#ffffff" loading size={30} />}
              {!showLoader && (formSubmitted ? check : submit)}
            </button>
          </div>
        </form>
        <p>or</p>
        <CopyToClipboard onCopy={() => setEmailCopied(true)} text="kasjan.hinc@gmail.com">
          <button
            className="copy-to-clipboard"
            style={{ cursor: emailCopied ? 'default' : 'pointer' }}
            disabled={emailCopied}
          >
            {emailCopied ? 'email copied to clipboard' : 'copy email to clipboard'}
            {emailCopied && smallCheck}
          </button>
        </CopyToClipboard>
      </div>
      <Socials />
    </Fragment>
  );
};

export default Contact;

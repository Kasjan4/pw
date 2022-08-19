import React from 'react';
import PropTypes from 'prop-types';

import './Section.scss';

const Section = ({ className, id, name, children }) => (
  <section className={className} id={id} name={name}>
    <div id={id}>{children}</div>
  </section>
);

Section.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;

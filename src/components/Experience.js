import React from 'react';
import Fade from 'react-reveal/Fade';

import Grid from './Grid';

import haddad from '../../src/img/haddad.png';
import paypo from '../../src/img/paypo.png';
import delikatesy from '../../src/img/delikatesy.png';
import baranski from '../../src/img/baranski.png';
import medicover from '../../src/img/medicover.png';
import ga from '../../src/img/ga.png';

const Experience = () => {
  const items = [
    { id: 1, href: 'https://www.haddad.com/', src: haddad, alt: 'Haddad', name: 'Haddad', empty: false },
    { id: 2, href: 'https://www.paypo.pl/', src: paypo, alt: 'PayPo', name: 'PayPo', empty: false },
    {
      id: 3,
      href: 'https://www.baranskidrzwi.pl/',
      src: baranski,
      alt: 'Barański drzwi',
      name: 'Barański drzwi',
      empty: false,
    },
    { id: 4, href: 'https://www.delikatesy.pl/', src: delikatesy, alt: 'Delikatesy', name: 'Delikatesy', empty: false },
    { id: 5, href: 'https://www.medicover.pl/', src: medicover, alt: 'Medicover', name: 'Medicover', empty: false },
    {
      id: 6,
      href: 'https://generalassemb.ly/',
      src: ga,
      alt: 'General Assembly',
      name: 'General Assembly',
      empty: false,
    },
  ];

  const title = (
    <h2 className="grid-title">
      Brands where I gained{' '}
      <Fade delay={500}>
        <span>experience</span>
      </Fade>
    </h2>
  );

  return <Grid title={title} items={items} svg={false} />;
};

export default Experience;

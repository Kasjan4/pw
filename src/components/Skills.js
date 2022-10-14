import React from 'react';

import Grid from './Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faGitAlt, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import reduxSVG from '../img/redux.svg';
import jQuerySVG from '../img/jquery.svg';
import typescriptSVG from '../img/typescript.svg';
import rwdSVG from '../img/rwd.svg';
import seoSVG from '../img/seo.svg';
import apiSVG from '../img/api.svg';

const Skills = () => {
  const js = <FontAwesomeIcon icon={faJs} size="4x" />;
  const html = <FontAwesomeIcon icon={faHtml5} size="4x" />;
  const css = <FontAwesomeIcon icon={faCss3} size="4x" />;
  const react = <FontAwesomeIcon icon={faReact} size="4x" />;
  const git = <FontAwesomeIcon icon={faGitAlt} size="4x" />;
  const node = <FontAwesomeIcon icon={faNodeJs} size="4x" />;

  const title = (
    <h2 className="grid-title">
      The tools that I <span>work</span> with
    </h2>
  );

  const items = [
    {
      id: 1,
      href: 'https://en.wikipedia.org/wiki/JavaScript',
      src: js,
      alt: 'JavaScript',
      name: 'JavaScript',
      localFile: false,
    },
    {
      id: 2,
      href: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
      src: react,
      alt: 'React',
      name: 'React',
      localFile: false,
    },
    { id: 3, href: 'https://en.wikipedia.org/wiki/HTML', src: html, alt: 'HTML', name: 'HTML', localFile: false },
    { id: 4, href: 'https://en.wikipedia.org/wiki/CSS', src: css, alt: 'CSS', name: 'CSS', localFile: false },
    { id: 5, href: 'https://en.wikipedia.org/wiki/Git', src: git, alt: 'Git', name: 'Git', localFile: false },
    { id: 6, href: 'https://en.wikipedia.org/wiki/Node.js', src: node, alt: 'Node', name: 'Node', localFile: false },
    {
      id: 10,
      href: 'https://en.wikipedia.org/wiki/TypeScript',
      src: typescriptSVG,
      alt: 'TypeScript',
      name: 'TypeScript',
      localFile: true,
    },
    {
      id: 7,
      href: 'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)',
      src: reduxSVG,
      alt: 'Redux',
      name: 'Redux',
      localFile: true,
    },
    {
      id: 8,
      href: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
      src: apiSVG,
      alt: 'REST API',
      name: 'REST API',
      localFile: true,
    },
    {
      id: 9,
      href: 'https://en.wikipedia.org/wiki/JQuery',
      src: jQuerySVG,
      alt: 'jQuery',
      name: 'jQuery',
      localFile: true,
    },
    {
      id: 11,
      href: 'https://en.wikipedia.org/wiki/Responsive_web_design',
      src: rwdSVG,
      alt: 'RWD',
      name: 'RWD',
      localFile: true,
    },
    {
      id: 12,
      href: 'https://en.wikipedia.org/wiki/Search_engine_optimization',
      src: seoSVG,
      alt: 'SEO',
      name: 'SEO',
      localFile: true,
    },
  ];

  return <Grid title={title} items={items} svg />;
};

export default Skills;

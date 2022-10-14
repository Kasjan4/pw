import React, { useState, useEffect, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import './Grid.scss';

const Grid = ({ title, items, svg }) => {
  const [itemsInState, setItemsInState] = useState(items);

  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });

  const isBreakpointS = useMediaQuery({
    query: '(min-width: 576px)',
  });

  const isBreakpointM = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    const emptyItem = { empty: true };

    if (isBreakpointM && items.length % 4 !== 0) {
      const emptyItems = Array(4 - Math.ceil(items.length % 4)).fill(emptyItem);

      setItemsInState([...items, ...emptyItems]);
    } else if (isBreakpointS && items.length % 3 !== 0) {
      const emptyItems = Array(3 - Math.ceil(items.length % 3)).fill(emptyItem);

      setItemsInState([...items, ...emptyItems]);
    } else if (isMobile && items.length % 2 !== 0) setItemsInState([...items, emptyItem]);
  }, [isBreakpointM, isBreakpointS, isMobile]);

  return (
    <Fragment>
      {title}
      <div className="grid-wrapper">
        {itemsInState.map((item) => (
          <div className="grid-item" key={item.id}>
            {!item.empty && (
              <a href={item.href} name={item.name} target="_blank" rel="noreferrer" className="grid-image">
                <Fade delay={isBreakpointS ? Math.floor(Math.random() * (500 - 200 + 1) + 200) : 0}>
                  <>
                    {!svg && <img className="grid-image__png" src={item.src} alt={item.alt} />}
                    {svg &&
                      (item.localFile ? <img className="grid-image__svg" src={item.src} alt={item.alt} /> : item.src)}
                  </>
                </Fade>
              </a>
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

Grid.propTypes = {
  title: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  svg: PropTypes.bool.isRequired,
};

export default Grid;

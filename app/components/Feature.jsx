import React from 'react';
import classNames from 'classnames';
import andrew from './../img/portfolio-andrew.png';

const Feature = () => {
  const featureClasses = classNames({
    'feature-container': true,
    'parallax': true
  });

  return (
    <div className={featureClasses}>
      <div className='feature'>
        <img alt='Andrew Merrell' src={andrew} />
        <h3>Andrew Merrell</h3>
        <h4>Jr. Software Developer</h4>
      </div>
    </div>
  );
};

export default Feature;

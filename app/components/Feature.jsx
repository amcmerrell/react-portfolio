import React from 'react';
import classNames from 'classnames';

const Feature = () => {
  const featureClasses = classNames({
    'feature-container': true,
    'parallax': true
  });

  return (
    <div className={featureClasses}></div>
  );
};

export default Feature;

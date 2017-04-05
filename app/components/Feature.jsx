import React from 'react';
import classNames from 'classnames';
import andrew from './../img/portfolio-andrew.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Feature = () => {
  const featureClasses = classNames({
    'feature-container': true,
    'parallax': true
  });

  return (
    <div className={featureClasses}>
      <ReactCSSTransitionGroup
        transitionName='feature-transition'
        transitionAppear={true}
        transitionAppearTimeout={1500}
      >
        <div className='feature'>
          <img alt='Andrew Merrell' src={andrew} />
          <h3>Andrew Merrell</h3>
          <h4>Jr. Software Developer</h4>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Feature;

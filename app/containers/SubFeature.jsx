import React from 'react';
import classNames from 'classnames';

const SubFeature = () => {
  const androidIconClass = classNames({
    'devicon': true,
    'devicon-android-plain': true,
    'colored': true
  });

  return (
    <div className='subfeature-container'>
      <h1>SubFeature</h1>
      <i className={androidIconClass}></i>
    </div>
  );
};

export default SubFeature;

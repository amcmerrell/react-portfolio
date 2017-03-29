import React from 'react';
import classNames from 'classnames';

const Nav = (props) => {
  const navClass = classNames({
    'locked-fade-in': props.locked,
    'hidden-nav': props.hidden
  });

  return (
    <nav className={navClass} >
      <h1>Navigation</h1>
    </nav>
  );
};

export default Nav;

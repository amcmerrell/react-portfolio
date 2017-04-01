import React, { Component } from 'react';
import classNames from 'classnames';
import SmoothScroll from 'smoothscroll';

class Nav extends Component {
  onClick(element, e) {
    const home = document.querySelector('.feature-container');
    const subFeature = document.querySelector('.subfeature-container');

    if (element === 'home') {
      SmoothScroll(home);
    } else if (element === 'subFeature') {
      SmoothScroll(subFeature);
    }

    e.preventDefault();
  }

  render() {
    const navClass = classNames({
      'nav-fade-in': this.props.locked,
    });
    return (
      <nav className={navClass} >
        <a ref='home' onClick={this.onClick.bind(this, 'home')}>Home</a>
        <a ref='subFeature' onClick={this.onClick.bind(this, 'subFeature')}>About</a>
      </nav>
    );
  }
}

export default Nav;

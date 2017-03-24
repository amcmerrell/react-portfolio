import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLockedToTop: false,
      isHidden: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 100) {
      this.setState({ isLockedToTop: true });
      console.log('unlocked');
    } else if (window.scrollY < 100) {
      this.setState({ isLockedToTop: false });
      console.log('locked');
    }
  }

  render() {
    const navClass = classNames({
      'locked-fade-in': this.state.isLockedToTop
    });

    return (
      <nav className={navClass} >
        <h1>Navigation</h1>
      </nav>
    );
  }
}

export default Nav;

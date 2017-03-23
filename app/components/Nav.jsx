import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLockedToTop: false,
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
    } else if (window.scrollY <= 100) {
      this.setState({ isLockedToTop: false });
      console.log('locked');
    }
  }

  render() {
    return (
      <div className='nav-container' style={{ position: this.state.isLockedToTop ? 'fixed' : 'relative' }}>
        <h1>Navigation</h1>
      </div>
    );
  }
}

export default Nav;

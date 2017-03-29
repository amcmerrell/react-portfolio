import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Feature from './Feature';
import SubFeature from './SubFeature';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavLockedToTop: false,
      isNavHidden: false,
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
      this.setState({ isNavLockedToTop: true });
    } else if (window.scrollY > 90 && window.scrollY < 100) {
      this.handleNavTransition(this.state.isNavLockedToTop);
    } else if (window.scrollY < 90) {
      this.setState({ isNavHidden: false, isNavLockedToTop: false });
    }
  }

  handleNavTransition(prevLockState) {
    if (!prevLockState) {
      this.setState({ isNavHidden: true });
    }
  }

  render() {
    return (
      <div>
        <Nav
          locked={this.state.isNavLockedToTop}
          hidden={this.state.isNavHidden}
        />
        <Feature />
        <SubFeature />
      </div>
    );
  }
}

export default Main;

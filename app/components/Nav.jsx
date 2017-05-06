import React, { Component } from 'react';
import classNames from 'classnames';
import SmoothScroll from 'smoothscroll';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavLockedToTop: false,
      isMobileNavOpen: false
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
    } else if (window.scrollY <= 100) {
      this.setState({ isNavLockedToTop: false });
    }
  }

  onNavClick(element, e) {
    const home = document.querySelector('.feature-container');
    const subFeature = document.querySelector('.subfeature-container');
    const projects = document.querySelector('.projects');

    if (element === 'home') {
      SmoothScroll(home, 1500);
      this.setState({ isMobileNavOpen: false });
    } else if (element === 'subFeature') {
      SmoothScroll(subFeature, 1500);
      this.setState({ isMobileNavOpen: false });
    } else if (element === 'projects') {
      SmoothScroll(projects, 1500);
      this.setState({ isMobileNavOpen: false });
    }

    e.preventDefault();
  }

  onMobMenuClick(e) {
    if (this.state.isMobileNavOpen) {
      this.setState({ isMobileNavOpen: false });
    } else {
      this.setState({ isMobileNavOpen: true });
    }

    e.preventDefault();
  }

  render() {
    const navClass = classNames({
      'nav-fade-in': this.state.isNavLockedToTop
    });

    const mobileNavClass = classNames({
      'animate-nav-height': this.state.isMobileNavOpen
    });

    const mobileMenuClass = classNames({
      'material-icons': true,
      'hamburger-menu': true
    });

    return (
      <nav className={navClass} >
        <div className='nav-header'>
          <div className='logo'>
            <h3>AM</h3>
          </div>
          <i
            className={mobileMenuClass}
            onClick={this.onMobMenuClick.bind(this)}>
            menu
          </i>
        </div>

        <ul className={mobileNavClass}>
          <li>
            <a ref='home' onClick={this.onNavClick.bind(this, 'home')}>Home</a>
          </li>
          <li>
            <a ref='subFeature' onClick={this.onNavClick.bind(this, 'subFeature')}>About</a>
          </li>
          <li>
            <a ref='projects' onClick={this.onNavClick.bind(this, 'projects')}>Projects</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;

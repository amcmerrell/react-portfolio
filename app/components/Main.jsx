import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Nav from './Nav';
import Feature from './Feature';
import SubFeature from './SubFeature';

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isNavLockedToTop: false,
  //   };
  //   this.handleScroll = this.handleScroll.bind(this);
  // }
  //
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  //
  // componentWillUnMount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
  //
  // handleScroll() {
  //   if (window.scrollY > 100) {
  //     this.setState({ isNavLockedToTop: true });
  //   } else if (window.scrollY <= 100) {
  //     this.setState({ isNavLockedToTop: false });
  //   }
  // }

  render() {
    return (
      <div>
        <Nav />
        <Feature />
        <SubFeature />
      </div>
    );
  }
}

export default Main;

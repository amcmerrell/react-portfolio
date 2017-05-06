import React, { Component } from 'react';
import Feature from './../components/Feature';
import SubFeature from './../components/SubFeature';
import Projects from './../components/Projects';
import Footer from './../components/Footer';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Feature />
        <SubFeature />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Main;

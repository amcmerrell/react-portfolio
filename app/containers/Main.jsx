import React, { Component } from 'react';
import Feature from './../components/Feature';
import SubFeature from './../components/SubFeature';
import Footer from './../components/Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Feature />
        <SubFeature />
        <Footer />
      </div>
    );
  }
}

export default Main;

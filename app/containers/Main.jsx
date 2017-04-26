import React, { Component } from 'react';
import Feature from './../components/Feature';
import SubFeature from './SubFeature';

class Main extends Component {
  render() {
    return (
      <div>
        <Feature />
        <SubFeature />
      </div>
    );
  }
}

export default Main;

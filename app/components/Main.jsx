import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Feature from './Feature';
import SubFeature from './SubFeature';

class Main extends Component {

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

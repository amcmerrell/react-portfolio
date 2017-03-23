import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Feature from './components/Feature';
import SubFeature from './components/SubFeature';
import style from './../styles/app.scss';

ReactDOM.render(
  <div>
    <Nav />
    <Feature />
    <SubFeature />
  </div>,
  document.getElementById('app')
);

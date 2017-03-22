import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Feature from './components/Feature';
import style from './../styles/app.scss';

ReactDOM.render(
  <div>
    <Nav />
    <Feature />
  </div>,
  document.getElementById('app')
);

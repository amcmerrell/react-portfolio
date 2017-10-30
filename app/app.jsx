import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import 'static-loader?!./robots.txt?output=./robots.txt';
import Main from './containers/Main';
import Nav from './components/Nav';

ReactDOM.render(
  <div>
    <Nav />
    <Main />
  </div>,
  document.getElementById('app')
);

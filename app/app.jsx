import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles/app.scss';
import Main from './containers/Main';
import Nav from './components/Nav';

ReactDOM.render(
  <div>
    <Nav />
    <Main />
  </div>,
  document.getElementById('app')
);

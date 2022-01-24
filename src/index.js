import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery'


ReactDOM.render(
  <App />,
  document.getElementById('root'),
  function preloader() {
    $('#preloader').delay(0).fadeOut();
  }
);


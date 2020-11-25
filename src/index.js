
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Navlist from './sections/Navlist.js';
import Footer from './sections/Footer.js';
import Home from './memu/Home.js';
import Gogi from './memu/Gogi.js';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Route path="/" component = {Navlist}/>
    <Route exact path="/" component = {Home}/>
    <Route path="/gogi" component = {Gogi}/>
    <Route path ="/" component = {Footer}/>
  </Router>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

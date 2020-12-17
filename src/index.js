
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { RecoilRoot } from "recoil";

import {Navlist,Foot, Register, Login} from './sections';
import { Home, Intro, Gogi, Review, Map, Test } from './memu';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <RecoilRoot>
  <Router>
    <Route path="/" component = {Navlist}/>
    <Route exact path="/" component = {Home}/>
    <Route path="/Test" component = {Test}/>
    <Route path="/Register" component = {Register}/>
    <Route path="/Login" component = {Login}/>
    <Route path="/intro" component = {Intro}/>
    <Route path="/Review" component = {Review}/>
    <Route path="/Map" component = {Map}/>
    <Route path="/gogi" component = {Gogi}/>
    <Route path ="/" component = {Foot}/>
  </Router></RecoilRoot>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

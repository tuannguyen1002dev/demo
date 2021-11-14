import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageNotFound from './App/PageNotFound'

import './styles/base/PageNotFound.css'

ReactDOM.render(

  <Router>
    <Switch>
      <Route path="/page-not-found" component={PageNotFound} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

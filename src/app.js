
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home/';


ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>,
  document.getElementById('root'),
);

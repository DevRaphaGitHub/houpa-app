import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
      <Route component={Product} path="/produto" />
    </BrowserRouter>
  );
}

export default Routes;

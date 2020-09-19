import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Home />
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
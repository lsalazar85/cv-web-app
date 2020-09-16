import React, { Component } from 'react';

import Home from './pages/Home';

import { BrowserRouter, Switch } from 'react-router-dom';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Home />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routing;
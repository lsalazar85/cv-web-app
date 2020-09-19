import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Home from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <Router>
    <GlobalStyle />
    <Home />
  </Router>
)

export default App;

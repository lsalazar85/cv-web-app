import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Home />
  </BrowserRouter>
)

export default App;

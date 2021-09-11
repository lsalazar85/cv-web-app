import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from "./styles/GlobalStyle";
import Spinner from "./components/UI/Spinner";

const Home = lazy(() => import('./pages/Home'));

const App = () => (
  <Suspense fallback={<Spinner />}>
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  </Suspense>
)

export default App;

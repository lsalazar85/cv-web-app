import React, { Fragment } from "react";

import Routing from "./Routing";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Routing />
  </Fragment>
)

export default App;

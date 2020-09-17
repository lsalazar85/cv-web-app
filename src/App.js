import React from "react";

import Routing from "./Routing";
import { GlobalStyle } from "./styles/GlobalStyle";
import { MainContextProvider } from "./context/MainContext";

const App = () => (
  <MainContextProvider>
    <GlobalStyle />
    <Routing />
  </MainContextProvider>
)

export default App;

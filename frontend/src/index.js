import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { MainContextProvider } from './context/MainContext'

ReactDOM.render(
  <MainContextProvider>
    <App />
  </MainContextProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()

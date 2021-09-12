import React, { useState } from 'react'

const MainContext = React.createContext({})

export const MainContextProvider = ({ children }) => {
  const [state, setState] = useState({})

  return (
    <MainContext.Provider value={{ state, setState }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContext

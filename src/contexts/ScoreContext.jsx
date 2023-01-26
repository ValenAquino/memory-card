import React, { createContext } from 'react'

const ScoreContext = createContext();

export const ScoreContextProvider = ({children}) => {
    return (
        <ScoreContext.Provider>
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreContext;
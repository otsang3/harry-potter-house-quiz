import React, { createContext } from 'react';

export const GlobalContext = createContext();

function GlobalState(props) {

    const obj = {test:"test"}

    return(
        <GlobalContext.Provider value={obj}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;
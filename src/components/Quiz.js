import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

function Quiz() {

    const globalContext = useContext(GlobalContext);
    console.log(globalContext);

    return(
        <div>
            Quiz.js
        </div>
    )
}

export default Quiz;
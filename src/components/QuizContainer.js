import React from 'react';
import GlobalState from './GlobalState';
import Quiz from './Quiz';

function QuizContainer() {

    return(
        <GlobalState>
            <Quiz/>
        </GlobalState>
    )
}

export default QuizContainer;
import React, { useContext } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import { GlobalContext } from './GlobalState';

function QuizContainer() {

    const globalContext = useContext(GlobalContext);
    const { state } = globalContext;

    if (state.currentQuestion > state.totalQuestions) {
        return(
            <div className="quiz-container">
                <Result userAnswers={state.userAnswers}/>
            </div>
        )
    }

    return(
        <div className="quiz-container">
            <Quiz/>
        </div>
    )
}

export default QuizContainer;
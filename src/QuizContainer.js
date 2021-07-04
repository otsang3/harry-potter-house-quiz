import React, { useContext } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { GlobalContext } from './components/GlobalState';
import { useSelector } from 'react-redux';

function QuizContainer() {
    const questionNum = useSelector((state) => state.question);
    const globalContext = useContext(GlobalContext);
    const { state } = globalContext;

    if (questionNum > state.totalQuestions) {
        return (
            <div className="quiz-container">
                <Result userAnswers={state.userAnswers} />
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <Quiz />
        </div>
    );
}

export default QuizContainer;

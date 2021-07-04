import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer, incrementQuestion } from '../actions/index';

function Quiz() {
    const questionNum = useSelector((state) => state.question);
    const dispatch = useDispatch();

    const globalContext = useContext(GlobalContext);
    const { state } = globalContext;
    const question = state.questions[questionNum - 1].question;
    const answers = state.questions[questionNum - 1].answers;

    const handleAnswer = (event) => {
        event.persist();
        dispatch(addAnswer(event.target.value));
        dispatch(incrementQuestion());
    };

    const renderAnswers = () => {
        let answersArr = [];
        answers.map((answer, index) => {
            return answersArr.push(
                <div key={index}>
                    <input
                        className="radio"
                        onChange={handleAnswer}
                        checked=""
                        type="radio"
                        name="answer"
                        value={answer.type}
                    />
                    <label>{answer.content}</label>
                </div>
            );
        });
        return answersArr;
    };

    return (
        <div className="question-container">
            <p>
                Question {questionNum} of {state.totalQuestions}
            </p>
            <h3>{question}</h3>
            {renderAnswers()}
        </div>
    );
}

export default Quiz;

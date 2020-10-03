import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

function Quiz() {

    const globalContext = useContext(GlobalContext);
    const { selectAnswer, state } = globalContext;
    const question = state.questions[state.currentQuestion - 1].question;
    const answers = state.questions[state.currentQuestion - 1].answers;

    const renderAnswers = () => {
        let answersArr = [];
        answers.map((answer, index) => {
            return answersArr.push(
                <div key={index}>
                    <input onChange={selectAnswer} checked="" type="radio" name="answer" value={answer.type}/>
                    <label>{answer.content}</label>
                </div>
            )
        })
        return answersArr
    }

    return(
        <div>
            <h3>{question}</h3>
            {renderAnswers()}
        </div>
    )
}

export default Quiz;
import React, { createContext, useEffect, useState } from 'react';
import { questions } from '../questions/Questions';

export const GlobalContext = createContext();

function GlobalState(props) {

    const shuffleAnswers = (questions) => {
        questions.map(question => {
            return {
                question: question,
                answers: question.answers.sort(() => Math.random() - 0.5)
            }
        })    
    }

    useEffect(() => shuffleAnswers(questions), [])

    const initialState = {
        currentQuestion: 0,
        questions: questions,
        questionNum: 0,
        totalQuestions: questions.length,
        userAnswers: {}
    }

    const [state, setState] = useState(initialState);

    const selectAnswer = (event) => {
        event.persist();
        setState(prevState => {
            if (prevState.userAnswers[event.target.value]) {
                return {
                    ...prevState,
                    userAnswers: {
                        ...prevState.userAnswers,
                        [event.target.value]: prevState.userAnswers[event.target.value] + 1
                    }
                }
            }
            return {
                ...prevState,
                userAnswers: {
                    ...prevState.userAnswers,
                    [event.target.value]: 1
                }
            }
        })
        console.log(event.target.value);
    }

    return(
        <GlobalContext.Provider value={{
            selectAnswer: selectAnswer,
            state: state
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;
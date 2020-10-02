import React, { createContext, useEffect, useState } from 'react';
import { questions } from '../questions/Questions';

export const GlobalContext = createContext();

function GlobalState(props) {

    useEffect(() => shuffleAnswers(questions), [])

    const shuffleAnswers = (questions) => {
        questions.map(question => {
            return {
                question: question,
                answers: question.answers.sort(() => Math.random() - 0.5)
            }
        })    
    }

    const initialState = {
        questions: questions,
        questionNum: 0,
        totalQuestions: questions.length,
        userAnswers: {}
    }

    const [state, setState] = useState(initialState);

    return(
        <GlobalContext.Provider value={state}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;
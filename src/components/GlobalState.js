import React, { createContext, useEffect, useState } from 'react';
import { questions } from '../questions/Questions';

export const GlobalContext = createContext();

function GlobalState(props) {
    const shuffleAnswers = (questions) => {
        questions.map((question) => {
            return {
                question: question,
                answers: question.answers.sort(() => Math.random() - 0.5),
            };
        });
    };

    useEffect(() => shuffleAnswers(questions), []);

    const initialState = {
        questions: questions,
        totalQuestions: questions.length,
    };

    const [state] = useState(initialState);

    return (
        <GlobalContext.Provider
            value={{
                state: state,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;

import React from 'react';
import GlobalContext from './components/GlobalState';
import QuizContainer from './QuizContainer';

function App() {
    return (
        <div className="app">
            <GlobalContext>
                <img
                    className="header"
                    alt="background"
                    src={require('./images/header.png')}
                />
                <QuizContainer />
            </GlobalContext>
        </div>
    );
}

export default App;

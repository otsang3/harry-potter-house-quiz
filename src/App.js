import React from 'react';
import GlobalContext from './components/GlobalState';
import QuizContainer from './components/QuizContainer';

function App() {
  return (
    <GlobalContext>
      <div className="app">
        <img className="header" src={require('./images/header.png')}/>
        <QuizContainer/>
      </div>
    </GlobalContext>
    
  );
}

export default App;

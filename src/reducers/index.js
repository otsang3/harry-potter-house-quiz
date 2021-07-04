import answersReducer from './answers';
import questionReducer from './question';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    answers: answersReducer,
    question: questionReducer,
});

export default allReducers;

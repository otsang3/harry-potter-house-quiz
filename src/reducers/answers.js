const answersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            const answer = action.payload;
            if (state[answer]) {
                return { ...state, [answer]: state[answer] + 1 };
            } else {
                return { ...state, [answer]: 1 };
            }
        default:
            return state;
    }
};

export default answersReducer;

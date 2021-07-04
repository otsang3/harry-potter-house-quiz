export const addAnswer = (answer) => {
    return {
        type: 'ADD_ANSWER',
        payload: answer,
    };
};

export const incrementQuestion = () => {
    return {
        type: 'INCREMENT',
    };
};

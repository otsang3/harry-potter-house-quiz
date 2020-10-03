import React from 'react';

function Result(props) {

    const { userAnswers } = props;

    const arr = Object.entries(userAnswers);

    const sortByHighest = (a, b) => {
        if (a[1] > b[1]) {
            return -1
        } else if (a[1] < b[1]) {
            return 1
        }
    }

    arr.sort(sortByHighest);
    
    

    return(
        <div>
            You will be a good fit at {arr[0][0]}
        </div>
    )
}

export default Result;
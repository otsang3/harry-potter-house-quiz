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

    const result = arr[0][0];
    let resultImage;

    switch (result) {
        case "Gryffindor":
            resultImage = "/Gryffindor.jpg";
            break;
        case "Hufflepuff":
            resultImage = "/Hufflepuff.jpg";
            break;
        case "Ravenclaw":
            resultImage = "/Ravenclaw.jpg";
            break;
        case "Slytherin":
            resultImage = "/Slytherin.jpg";
            break;
        default:
            break;
    }
    
    console.log(resultImage);

    return(
        <div>
            <p>You will be a good fit at {result}</p>
            <img src={require('../images' + resultImage)} alt="house-logo"/>
        </div>
    )
}

export default Result;
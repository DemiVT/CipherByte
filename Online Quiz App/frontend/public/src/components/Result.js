import React from 'react';

const Result = ({ score, correctAnswers }) => {
  return (
    <div>
      <h2>Results</h2>
      <p>Your Score: {score}</p>
      <h3>Correct Answers</h3>
      <ul>
        {correctAnswers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;

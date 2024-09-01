import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get('/api/quiz/all');
        setQuizzes(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuizzes();
  }, []);

  const handleAnswerChange = (e, questionId) => {
    setAnswers({ ...answers, [questionId]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // Calculate score and display result
      // For simplicity, we'll assume the result is just a placeholder
      alert('Quiz submitted!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Quiz</h2>
      {quizzes.map((quiz) => (
        <div key={quiz._id}>
          <p>{quiz.question}</p>
          {quiz.options.map((option, index) => (
            <label key={index}>
              <input type="radio" name={quiz._id} value={option} onChange={(e) => handleAnswerChange(e, quiz._id)} />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;

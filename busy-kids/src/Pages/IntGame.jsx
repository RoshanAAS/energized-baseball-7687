import React, { useState, useEffect } from 'react';
import "./IntGame.css";
export const IntGame = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [result, setResult] = useState('');

  const questions = [
    { text: 'What is 50% of 16?', answer: '8' },
    { text: 'What is 25% of 80?', answer: '20' },
    { text: 'What is 75% of 40?', answer: '30' },
    { text: 'What is 10% of 200?', answer: '20' },
    { text: 'What is 20% of 75?', answer: '15' },
    { text: 'What is 60% of 50?', answer: '30' },
  ];

  const askQuestion = () => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setQuestion(randomQuestion.text);
    setAnswer(randomQuestion.answer);
  };

  const checkAnswer = (userAnswer) => {
    const correct = userAnswer === answer;
    setResult(correct ? 'Correct Answer!' : 'Wrong Answer :(');
    if (correct) {
      setScore(score + 1);
    }
    askQuestion();
  };

  useEffect(() => {
    askQuestion();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    checkAnswer(event.target.answer.value);
    event.target.answer.value = '';
  };

  return (
    <div className="IntGame">
      <h1>Interest Calculator Game</h1>
      <p>Score: {score}</p>
      <h2>{question}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="answer" />
        <button className='btn' type="submit">Submit</button>
      </form>
      <p>{result}</p>
    </div>
  );
};
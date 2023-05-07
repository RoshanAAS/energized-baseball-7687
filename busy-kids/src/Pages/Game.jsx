import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Game.css";

export const Game = () => {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(generateQuestion());
  const [answerMessage, setAnswerMessage] = useState("");

  function generateQuestion() {
    const a = Math.floor(Math.random() * 90) + 10;
    const b = Math.floor(Math.random() * 90) + 10;
    return { a, b };
  }

  function handleAnswer() {
    const answer = parseInt(document.getElementById("answer").value);
    if (answer === question.a + question.b) {
      setScore(score + 1);
      setAnswerMessage("Correct Answer");
    } else {
      setAnswerMessage("Wrong Answer");
    }
    setQuestion(generateQuestion());
    document.getElementById("answer").value = "";
  }

  return (
    <Container className="game-container">
      <Row className="justify-content-center">
        <h1 className="game-title">Study Game</h1>
      </Row>
      <Row className="justify-content-center">
        <Col xs={6}>
          <h2 className="question">{question.a} + {question.b} = ?</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={6}>
          <div className="d-flex justify-content-between mb-2">
            {[...Array(10).keys()].map(num => (
              <Button key={num} variant="primary" onClick={() => {
                document.getElementById("answer").value += num;
              }} className="number-button">
                {num}
              </Button>
            ))}
          </div>
          
          <Button variant="primary" onClick={() => handleAnswer()} className="ans-button">
            Submit
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={6}>
          <input type="text" id="answer" className="form-control mb-2 answer-input" placeholder="Answer" />
          <h2 className="score">Score: {score}</h2>
          <div className="answer-message">{answerMessage}</div>
        </Col>
      </Row>
    </Container>
  );
}
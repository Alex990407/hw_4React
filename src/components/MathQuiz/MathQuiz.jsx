import React, { useState } from "react";
import Answer from "./Answer";

const MathQuiz = () => {
  const [a, setA] = useState(Math.floor(Math.random() * 10));
  const [b, setB] = useState(Math.floor(Math.random() * 10));
  const [score, setScore] = useState(0);

  // Функция для обновления баллов
  const updatePoints = (userAnswer) => {
    const correctAnswer = a + b;
    if (parseInt(userAnswer, 10) === correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
  };

  return (
    <div>
      <h1>Math Quiz</h1>
      <p>
        Сколько будет {a} + {b}?
      </p>
      <p>Текущий счёт: {score}</p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
};

export default MathQuiz;

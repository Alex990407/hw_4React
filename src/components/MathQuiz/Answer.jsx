import React, { useState } from "react";

const Answer = ({ updatePoints }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePoints(userAnswer);
    setUserAnswer(""); // Очистка поля ввода после отправки
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Ваш ответ"
      />
      <button type="submit">Ответить</button>
    </form>
  );
};

export default Answer;

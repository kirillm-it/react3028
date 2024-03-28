import React, { useState } from 'react';

const Item = () => {
  const riddles = [
    {
      id: 1,
      description: 'Что может путешествовать по миру, оставаясь в одном и том же углу?',
      option1: 'Почтовая марка на конверте',
      option2: 'Портал',
      option3: 'Сбитый GPS трекер',
      option4: 'Метла',
      correct: 1
    },
    // Остальные загадки...
  ];

  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (riddleId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [riddleId]: selectedOption
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className='mainDiv'>
        <h1>Мун ИТ2</h1>
              <h2>Загадка</h2>
      {riddles.map(riddle => (
        <div key={riddle.id}>
          <p className="question">{riddle.description}</p>
          <input
            type="radio"
            name={riddle.id}
            id={`${riddle.id}.1`}
            value={1}
            onChange={() => handleAnswerChange(riddle.id, 1)}
          />
          <label htmlFor={`${riddle.id}.1`}>{riddle.option1}</label><br />
          <input
            type="radio"
            name={riddle.id}
            id={`${riddle.id}.2`}
            value={2}
            onChange={() => handleAnswerChange(riddle.id, 2)}
          />
          <label htmlFor={`${riddle.id}.2`}>{riddle.option2}</label><br />
          <input
            type="radio"
            name={riddle.id}
            id={`${riddle.id}.3`}
            value={3}
            onChange={() => handleAnswerChange(riddle.id, 3)}
          />
          <label htmlFor={`${riddle.id}.3`}>{riddle.option3}</label><br />
          <input
            type="radio"
            name={riddle.id}
            id={`${riddle.id}.4`}
            value={4}
            onChange={() => handleAnswerChange(riddle.id, 4)}
          />
          <label htmlFor={`${riddle.id}.4`}>{riddle.option4}</label><br />

          {showResults && answers[riddle.id] && (
            <p className="result">
              {answers[riddle.id] === riddle.correct
                ? 'Верно!'
                : `Неверно. Правильный ответ: ${riddle['option' + riddle.correct]}`}
            </p>
          )}
        </div>
      ))}
      <button type="submit" className="submit" onClick={handleSubmit}>
        Ответить
      </button>
    </div>
  );
}

export default Item;

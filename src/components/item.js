import React, { useState } from 'react';

const Item = () => {
  const riddles = [
    {
      id: 1,
      description: 'Идет то в гору, то с горы, но остается на месте.',
      option1: 'Вода',
      option2: 'Взгляд',
      option3: 'Звук',
      option4: 'Дорога',
      correct: 4,
    },
    {
      id: 2,
      description: 'В каком слове 5 "е" и никаких других гласных?',
      option1: 'Ежедневник',
      option2: 'Детственник',
      option3: 'Съедено',
      option4: 'Переселенец',
      correct: 4,
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionClick = (riddleId, optionIndex) => {
    setSelectedOptions(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [riddleId]: optionIndex,
    }));
  };

  const isSelected = (riddleId, optionIndex) => {
    return selectedOptions[riddleId] === optionIndex;
  };

  return (
    <div>
      {riddles.map(riddle => (
        <div key={riddle.id}>
          <h3>{riddle.description}</h3>
          <ul>
            <li>
              <button
                className={isSelected(riddle.id, 0) ? 'selected' : ''}
                onClick={() => handleOptionClick(riddle.id, 0)}
              >
                {riddle.option1}
              </button>
            </li>
            <li>
              <button
                className={isSelected(riddle.id, 1) ? 'selected' : ''}
                onClick={() => handleOptionClick(riddle.id, 1)}
              >
                {riddle.option2}
              </button>
            </li>
            <li>
              <button
                className={isSelected(riddle.id, 2) ? 'selected' : ''}
                onClick={() => handleOptionClick(riddle.id, 2)}
              >
                {riddle.option3}
              </button>
            </li>
            <li>
              <button
                className={isSelected(riddle.id, 3) ? 'selected' : ''}
                onClick={() => handleOptionClick(riddle.id, 3)}
              >
                {riddle.option4}
              </button>
            </li>
          </ul>
          {selectedOptions[riddle.id] !== undefined && (
            <p className="correct-answer">
              {selectedOptions[riddle.id] === riddle.correct
                ? 'Your answer is correct!'
                : 'Your answer is incorrect!'}{' '}
              Correct answer: Option {riddle.correct + 1}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Item;

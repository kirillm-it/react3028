import React, { useState } from 'react';
import Button from './button';

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
    // Добавьте другие загадки...
  ];

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionClick = (riddleId, optionIndex) => {
    setSelectedOptions(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [riddleId]: optionIndex,
    }));
  };

  const getSelectedOption = riddleId => {
    return selectedOptions[riddleId] ?? null;
  };

  return (
    <div>
      {riddles.map(riddle => (
        <div key={riddle.id}>
          <h3>{riddle.description}</h3>
          <ul>
            {riddle.options.map((option, index) => (
              <li key={index}>
                <Button
                  text={option}
                  isSelected={getSelectedOption(riddle.id) === index}
                  onClick={() => handleOptionClick(riddle.id, index)}
                />
              </li>
            ))}
          </ul>
          {getSelectedOption(riddle.id) !== null && (
            <p className="correct-answer">
              {getSelectedOption(riddle.id) === riddle.correct
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

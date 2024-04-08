import React, { useState } from 'react';

const Item = () => {
  const quiz = [
    {
      id: 1,
      question: 'Какой город является столицей Франции?',
      options: [
        'Лондон',
        'Берлин',
        'Париж',
        'Мадрид'
      ],
      correctAnswer: 2
    },
    {
      id: 2,
      question: 'Какое животное является символом мудрости во многих культурах?',
      options: [
        'Сова',
        'Лиса',
        'Волк',
        'Корова'
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      question: 'Какой цвет получается смешением синего и красного?',
      options: [
        'Желтый',
        'Фиолетовый',
        'Зеленый',
        'Оранжевый'
      ],
      correctAnswer: 1
    }
  ];

  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    quiz.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const restartQuiz = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className='mainDiv'>
      {!showResults ? (
        <>
          <h2>Викторина</h2>
          {quiz.map((question) => (
            <div key={question.id}>
              <p className="question">{question.question}</p>
              {question.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`answer-${question.id}-${index}`}
                    name={`answer-${question.id}`}
                    value={index}
                    onChange={() => handleAnswerChange(question.id, index)}
                  />
                  <label htmlFor={`answer-${question.id}-${index}`}>{option}</label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit" className="submit" onClick={handleSubmit}>
            Ответить
          </button>
        </>
      ) : (
        <div>
          <h2>Результат</h2>
          <p>Вы ответили правильно на {calculateScore()} из {quiz.length} вопросов.</p>
          <button type="button" className="restart" onClick={restartQuiz}>
            Пройти еще раз
          </button>
        </div>
      )}
      <footer>
        <p>@Мун К.В. ИТ/2-23</p>
      </footer>
    </div>
  );
};

export default Item;

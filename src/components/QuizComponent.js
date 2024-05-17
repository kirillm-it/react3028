import React, { useState } from 'react';

const QuizComponent = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
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
    <div>
      {!showResults ? (
        <>
          {questions.map((question) => (
            <div key={question.id}>
              <p>{question.question}</p>
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
          <button onClick={handleSubmit}>Ответить</button>
        </>
      ) : (
        <div>
          <h2>Результат</h2>
          <p>Вы ответили правильно на {calculateScore()} из {questions.length} вопросов.</p>
          <button onClick={restartQuiz}>Пройти еще раз</button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;

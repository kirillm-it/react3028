import React from 'react';

const QuestionList = ({ questions }) => {
  return (
    <div>
      <h2>Вопросы</h2>
      {questions.map((question, index) => (
        <div key={question.id}>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;

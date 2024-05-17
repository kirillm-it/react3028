import React, { useState } from 'react';

const AddQuestionForm = ({ onAddQuestion }) => {

    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (question.trim() && options.some((option) => option.trim()) && correctAnswer !== null) {
        const newQuestion = {
          id: Date.now(),
          question,
          options: options.filter((option) => option.trim()),
          correctAnswer,
        };
        onAddQuestion(newQuestion);
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectAnswer(null);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Вопрос:
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </label>
        <label>
          Варианты ответов:
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => setOptions((prevOptions) => {
                const newOptions = [...prevOptions];
                newOptions[index] = e.target.value;
                return newOptions;
              })}
            />
          ))}
        </label>
        <label>
          Правильный ответ:
          <select value={correctAnswer} onChange={(e) => setCorrectAnswer(parseInt(e.target.value))}>
            <option value={null}>Выберите правильный ответ</option>
            {options.map((option, index) => (
              <option key={index} value={index}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Добавить вопрос</button>
      </form>
    );
  };
  
  export default AddQuestionForm;
  
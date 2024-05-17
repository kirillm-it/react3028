import React, { useState } from 'react';
import './App.css';
import QuizComponent from './components/QuizComponent';
import AddQuestionForm from './components/AddQuestionForm';
import initialQuestions from './questions';

function App() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div>
      <h1>Викторина</h1>
      <button onClick={toggleAddForm}>
        {showAddForm ? 'Скрыть форму' : 'Добавить новый вопрос'}
      </button>
      {showAddForm && <AddQuestionForm onAddQuestion={handleAddQuestion} />}
      <QuizComponent questions={questions} />
    </div>
  );
}

export default App;

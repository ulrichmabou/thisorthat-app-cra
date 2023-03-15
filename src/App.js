import { useState } from 'react';
import './App.css';

const data = [
  {
    "id": 1,
    "optionA": "Pizza",
    "optionB": "Tacos"
  },
  {
    "id": 2,
    "optionA": "Beach",
    "optionB": "Mountains"
  },
  {
    "id": 3,
    "optionA": "Books",
    "optionB": "Movies"
  },
  {
    "id": 4,
    "optionA": "Summer",
    "optionB": "Winter"
  },
  {
    "id": 5,
    "optionA": "Coffee",
    "optionB": "Tea"
  },
  {
    "id": 6,
    "optionA": "Cake",
    "optionB": "Ice Cream"
  },
  {
    "id": 7,
    "optionA": "Dogs",
    "optionB": "Cats"
  },
  {
    "id": 8,
    "optionA": "Guitar",
    "optionB": "Piano"
  },
  {
    "id": 9,
    "optionA": "Cycling",
    "optionB": "Running"
  },
  {
    "id": 10,
    "optionA": "Chocolate",
    "optionB": "Vanilla"
  }
];


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">This||That</div>
    </nav>
  );
}

function Question({ optionAText, optionBText, onButtonClick }) {

  return (
    <div className="question-container">
      <button
        className="question-btn"
        onClick={() => onButtonClick(optionAText)}>
        {optionAText}
      </button>
      <span className="question-text">OR</span>
      <button
        className="question-btn"
        onClick={() => onButtonClick(optionBText)}>
        {optionBText}
      </button>
      <span className="question-text">?</span>
    </div>
  );
}

function Response({ optionAText, optionBText, selection }) {
  return (
    <div className="response-container">
      <p className="response-text">You selected: {selection && <span>{selection}</span>}</p>
      {selection && <p className="response-desciption">You are someone who prefers {selection === optionAText ? selection : optionBText} over {selection === optionAText ? optionBText : optionAText}.</p>}
    </div>
  );
}

function App() {
  const randomNumber = Math.floor(Math.random() * data.length);
  const [optionAText, setOptionAText] = useState(data[randomNumber].optionA);
  const [optionBText, setOptionBText] = useState(data[randomNumber].optionB);
  const [selected, setSelected] = useState(null);

  function handleButtonClick(buttonText) {
    setSelected(buttonText);
  }

  return (
    <div>
      <div className="App">
        <Navbar />
        <Question
          optionAText={optionAText}
          optionBText={optionBText}
          selection={selected}
          onButtonClick={handleButtonClick}
        />
        <Response
          optionAText={optionAText}
          optionBText={optionBText}
          selection={selected}
        />
      </div>
    </div>
  );
}

export default App;

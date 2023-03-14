import { useState } from 'react';
import './App.css';

const questionPairs = [
  {
    this: "Dog",
    that: "Cat"
  }
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ThisOrThat</div>
    </nav>
  );
}

function Question({ onButtonClick, selection }) {
  const firstButtonText = questionPairs[0].this;
  const secondButtonText = questionPairs[0].that;

  return (
    <div className="question-container">
      <button 
        className="question-btn" 
        onClick={() => onButtonClick(firstButtonText)}>
        {firstButtonText}
      </button>
      <span className="question-text">OR</span>
      <button 
        className="question-btn" 
        onClick={() => onButtonClick(secondButtonText)}>
        {secondButtonText}
      </button>
      <span className="question-text">?</span>
    </div>
  );
}

function Response({ selection }) {
  return (
    <div className="response-container">
      {selection && <p className="response-text">You selected: <span>{selection}</span></p>}
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState(null);
  // const [response, setResponse] = useState("Dog");

  function handleButtonClick(buttonText) {
    // console.log("clicked")
    setSelected(buttonText);
    console.log(selected);

  }

  return (
    <div>
      <div className="App">
        <Navbar />
        <Question onButtonClick={handleButtonClick} selection={selected} />
        <Response selection={selected} />
      </div>
    </div>
  );
}

export default App;

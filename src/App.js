import { useState } from 'react';
import Navbar from './components/Navbar';
import Question from './components/Question';
import Response from './components/Response';
import data from './Data'
import './App.css';

function App() {
  const randomNumber = Math.floor(Math.random() * data.length);
  const optionAText = data[randomNumber].optionA;
  const optionBText = data[randomNumber].optionB;
  
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

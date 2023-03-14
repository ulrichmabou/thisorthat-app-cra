import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ThisOrThat</div>
    </nav>
  );
}

function Question() {
  return (
    <div className="question-container">
      <button className="question-btn">Dog</button>
      <span className="question-text">OR</span>
      <button className="question-btn">Cat</button>
      <span className="question-text">?</span>
    </div>
  );
}

function Response() {
  return (
    <div className="response-container">
      <p className="response-text">Dog</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Question />
        <Response />
      </div>
    </div>
  );
}

export default App;

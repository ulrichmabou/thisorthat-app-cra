export default function Question({ optionAText, optionBText, onButtonClick }) {

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
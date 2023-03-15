export default function Response({ optionAText, optionBText, selection }) {
    return (
      <div className="response-container">
        <p className="response-text">You selected: {selection && <span>{selection}</span>}</p>
        {selection && <p className="response-desciption">You are someone who prefers {selection === optionAText ? selection : optionBText} over {selection === optionAText ? optionBText : optionAText}.</p>}
      </div>
    );
  }
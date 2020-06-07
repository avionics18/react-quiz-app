import React, {useState} from "react";

function QuestionBox({question, answers, selected}) {

  const [options, setOptions] = useState(answers);
  const [btnBG, setBtnBG] = useState("btn-outline-secondary");
  
  return (
    <div className="card bg-light shadow-sm mb-3">
      <div className="card-body">
        <p className="fz-18 font-weight-bold">
          {question}
        </p>
        <p className="m-0">
          {options.map((text, index) => 
            <button 
              className = {`btn ${btnBG} btn-sm mr-2 mb-2`} 
              onClick={() => {
                setOptions([text]);
                setBtnBG("btn-secondary");
                selected(text);
              }} 
              key = {index}
            >
              {text}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

export default QuestionBox;
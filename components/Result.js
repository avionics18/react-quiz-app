import React from "react";

export default function Result({score, playAgain}) {

  const percentage = (score/5)*100;
  
  return (
    <React.Fragment>
      <div className="card shadow-sm">
        <div className="card-header">
          <h4 className="text-center">SCORECARD</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-2">
              <div className="card shadow-sm border-success">
                <div className="card-header text-center text-success font-weight-bold">
                  CORRECT
                </div>
                <div className="py-4">
                  <h1 className="text-success text-center">{score}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-2">
              <div className="card shadow-sm border-danger">
                <div className="card-header text-center text-danger font-weight-bold">
                  INCORRECT
                </div>
                <div className="py-4">
                  <h1 className="text-danger text-center">{5-score}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-2">
              <div className="card shadow-sm border-dark">
                <div className="card-header text-center text-dark font-weight-bold">
                  ATTEMPTS
                </div>
                <div className="py-4">
                  <h1 className="text-dark text-center">5</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-2">
              <div className="card shadow-sm border-primary">
                <div className="card-header text-center text-primary font-weight-bold">
                  PERCENTAGE
                </div>
                <div className="py-4">
                  <h1 className="text-primary text-center">
                    {percentage.toFixed(2)}%
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-5 mb-0">
        <button className="btn btn-lg btn-dark" onClick={()=>playAgain()}>Reconduct Exam</button>
      </p>
    </React.Fragment>
  );
}
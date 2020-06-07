import React, {Component} from "react";
import quizService from "./quizService";
import { QuestionBox, Result } from "./components";

class App extends Component {

  state = {
    questionBank: [],
    score: 0,
    responses: [],
  }

  getQuestions = () => {
    quizService().then(questions => {
        this.setState({ questionBank: questions });
      });
  }

  componentDidMount() {
    this.getQuestions();
  }

  computeScore = (answer, correct) => {
    const value = this.state.responses.some(element=>element===answer);
    if(this.state.responses.length===0 || !value){
      if(answer===correct){
        this.setState({score: this.state.score+1});
      }
      this.setState({responses: [...this.state.responses, answer]});
    }
  }

  playAgain = () => {
    this.setState({score: 0, responses: []});
    this.getQuestions();
  }
  
  render(){
    return (
      <div className="container my-3">
        <div className="wrapper shadow">
          <h2 className="m-0 bg-dark p-4 text-light">
            QUIZIAPA
          </h2>
          <div className="wrapper-content p-4">
            {this.state.questionBank.length > 0 && this.state.responses.length < 5 && this.state.questionBank.map(({question, answers, correct, id}) => <QuestionBox question={question} answers={answers} selected={(answer) => this.computeScore(answer, correct)} key={id} />)}
            {this.state.responses.length===5 ? <Result score={this.state.score} playAgain={this.playAgain} /> : null }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from "react"
import 'materialize-css/dist/css/materialize.min.css'
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'
import QuestionBox from "./QuestionBox"
import Result from "../result/Result"

class QuestionPaper extends Component{
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    };
    callAPI() {
        fetch("http://localhost:3000/questionPaper")
            .then(res => res.json())
            .then(res => this.setState({questionBank: res}));
    };

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 2 ? this.state.responses + 1 : 2
        });
    };

    playAgain = () => {
        this.callAPI();
        this.setState({
            score: 0,
            responses: 0
        })
    };

    componentDidMount() {
        this.callAPI();
    }

    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>;
        return(
            <div className="container white">
                <div className="title">
                    <h5>Answer for the all questions</h5>
                </div>
                <div className="paper">
                    {this.state.questionBank.length > 0 &&
                    this.state.responses < 9 &&
                    this.state.questionBank.map(
                        ({newQuestion, answers, correctAnswer, questionId}) =>
                            (
                                <QuestionBox
                                    question={newQuestion}
                                    options={answers}
                                    key={questionId}
                                    selected={answer => this.computeAnswer(answer, correctAnswer)}/>
                            )
                    )}
                    {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} /> ) : null}
                </div>

            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        questionPaper: (question) => dispatch(QuestionPaper(question))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPaper)

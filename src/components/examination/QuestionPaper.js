import React,  {Component} from "react"
import 'materialize-css/dist/css/materialize.min.css'
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'
import QuestionBox from "./QuestionBox"
import Result from "../result/Result"
import StopWatch from "./stopWatch";
import { Container, Row, Col } from 'react-grid-system';
import AnswerBox from "./answerBox";
import './examination.css';

class QuestionPaper extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0,
        answerBank: [],
        correctness: "false"
    };

    callAPI() {
        fetch("http://localhost:3000/questionPaper")
            .then(res => res.json())
            .then(res => this.setState({questionBank: res}));
    };

    computeAnswer = (answer, correctAnswer, index) => {

        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1,
                correctness: "true"
            });
        }
        this.setState({

        });
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
        // console.log(answerBank, this.state.correctness)
    };

    saveAnswer = (response) => {
        console.log(this.state.score)
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
        return (
            <div className="paper">
                <Container>
                    <Row>
                        <Col md={9}>
                            <div>
                                <div className=" white">
                                    <div className=" container ">
                                        <div className="card">
                                            <div className="row paperHead">
                                                <div className="">
                                                    <h5 className="center-align">General Certificate of Education (Ord. Level)
                                                        Examination</h5>
                                                </div>
                                                <div className="col s1"></div>
                                                <div className="col s2 card "><h6 className="left-align">Science paper- I</h6></div>
                                                <div className="col s6"></div>
                                                <div className="col s2 card right-align"><h6 className="right-align">One hour</h6>
                                                </div>
                                                <div className="col s1"></div>
                                            </div>
                                        </div>
                                        <div className="important card">
                                            <h5>Important</h5>
                                            <ol>
                                                <li>Answer for all questions</li>
                                                <li>
                                                    In each of the questions 1 to 40, pic one of the alternatives (1), (2),
                                                    (3), (4) which you consider correct ot most appropriate answer.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="paper">
                                        {this.state.questionBank.length > 0 &&
                                        this.state.responses < 5 &&
                                        this.state.questionBank.map(
                                            ({newQuestion, answers, correctAnswer, id}, index) =>
                                                (
                                                    <QuestionBox
                                                        questionIndex={index}
                                                        question={newQuestion}
                                                        options={answers}
                                                        key={id}
                                                        selected={answer => this.computeAnswer(answer, correctAnswer, index)}
                                                        answerIndex={(index) => this.saveAnswer(index)}
                                                    />
                                                )
                                        )}
                                        {this.state.responses === 5 ? (
                                            this.saveAnswer(),
                                            <Result score={this.state.score} playAgain={this.playAgain}/>) : null}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="leftRaw">
                                <StopWatch />
                                {/*<div>*/}
                                {/*    {this.state.answerBank && this.state.answerBank.map(*/}
                                {/*        ({questionIndex, responseIndex}) =>*/}
                                {/*            (*/}
                                {/*                <AnswerBox*/}
                                {/*                    questionID = {questionIndex}*/}
                                {/*                    responseID = {responseIndex}*/}
                                {/*                />*/}
                                {/*            )*/}
                                {/*    )}*/}
                                {/*</div>*/}
                                <AnswerBox />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
        ;
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

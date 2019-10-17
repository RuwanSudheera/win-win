import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createQuestion} from '../../store/actions/questionActions'
import {Redirect} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

class CreateQuestion extends Component {
    state = {
        grade: '',
        subject: '',
        subjectArea: '',
        harderLevel: '',
        newQuestion: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answers: [],
        correctAnswer: ''
    };

    componentDidMount() {
        M.AutoInit();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleChangeOne = (e) => {
        this.setState({
            answers: this.state.answers.push(
                this.state.answer1,
                this.state.answer2,
                this.state.answer3,
                this.state.answer4
            )
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleChangeOne();
        let stateOne = {
            grade: this.state.grade,
            subject: this.state.subject,
            subjectArea: this.state.subjectArea,
            harderLevel: this.state.harderLevel,
            newQuestion: this.state.newQuestion,
            answers: this.state.answers,
            correctAnswer: this.state.correctAnswer
        };
        // console.log(stateOne);
        this.props.createQuestion(stateOne);
        this.props.history.push('/create');
    };

    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>;
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create a New Question</h5>

                    <div className="input-field">
                        <select value={this.state.grade} onChange={this.handleChange} id="grade" required={'required'}>
                            <option value="grade">Select The Grade</option>
                            <option value="grade6">Grade 6</option>
                            <option value="grade7">Grade 7</option>
                            <option value="grade8">Grade 8</option>
                            <option value="grade9">Grade 9</option>
                            <option value="grade10">Grade 10</option>
                            <option value="grade11">Grade 11 Ordinary level</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <select onChange={this.handleChange} id="subject">
                            <option value="subject">Select The Subject</option>
                            <option value="science">Science</option>
                            <option value="it">Information Technology</option>
                            <option value="english">English</option>
                            <option value="sinahala">Sinhala</option>
                            <option value="history">History</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <select onChange={this.handleChange} id="subjectArea">
                            <option value="area">Select The Subject Area</option>
                            <option value="area1">Living tissues</option>
                            <option value="area2">Photosynthesis</option>
                            <option value="area3">Mixtures</option>
                            <option value="area4">Waves and their applications</option>
                            <option value="area5">Optics</option>
                            <option value="area6">Human body processes</option>
                            <option value="area7">Acid base and salts</option>
                            <option value="area8">Chemical process related heat changes</option>
                            <option value="area9">Heat</option>
                            <option value="area10">Power of electronic devices</option>
                            <option value="area11">Electronics</option>
                            <option value="area12">Electrochemistry</option>
                            <option value="area13">Electromagnetism and electromagnetic induction</option>
                            <option value="area14">Hydrocarbon and their derivatives</option>
                            <option value="area15">Ecology</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <select onChange={this.handleChange} id="harderLevel">
                            <option value="harderLevel">Select The Harder Level</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <input type="text" id='newQuestion' onChange={this.handleChange}/>
                        <label htmlFor="newQuestion">Question</label>
                    </div>
                    <div className="container">
                        <div className="input-field">
                            <input type="text" id='answer1' onChange={this.handleChange}/>
                            <label htmlFor="answers">Answer 1</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id='answer2' onChange={this.handleChange}/>
                            <label htmlFor="answers">Answer 2</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id='answer3' onChange={this.handleChange}/>
                            <label htmlFor="answers">Answer 3</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id='answer4' onChange={this.handleChange}/>
                            <label htmlFor="answers">Answer 4</label>
                        </div>
                    </div>
                    <div className="input-field">
                        <input type="text" id='correctAnswer' onChange={this.handleChange}/>
                        <label htmlFor="correctAnswer">Correct Answer</label>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1">Add question</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createQuestion: (question) => dispatch(createQuestion(question))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion)

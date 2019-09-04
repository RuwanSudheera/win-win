import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createQuestion } from '../../store/actions/questionActions'
import { Redirect } from 'react-router-dom'

class CreateQuestion extends Component {
  state = {
    title: '',
    content: '',
    examination: 'examination',
    grade: 'grade',
    subject: 'subject',
    harderLevel: 'harderLevel',
    newQuestion: 'newQuestion',
    answers: ['newQuestion1', 'newQuestion2', 'newQuestion3'],
    correctAnswer: Number
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  handleSubmit = (e) => {
      console.log(e)
    e.preventDefault();
    // console.log(this.state);
    this.props.createQuestion(this.state);
    this.props.history.push('/');
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Question</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Question Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Question Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
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

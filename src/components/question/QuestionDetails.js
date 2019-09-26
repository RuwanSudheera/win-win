import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const QuestionDetails = (props) => {
  const { question, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (question) {
    return (
      <div className="container section question-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{question.title}</span>
            <p>{question.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {question.authorFirstName} {question.authorLastName}</div>
            <div>{moment(question.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading question...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const questions = state.firestore.data.questions;
  const question = questions ? questions[id] : null
  return {
    question: question,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'questions'
  }])
)(QuestionDetails)

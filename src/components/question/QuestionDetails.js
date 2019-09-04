import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const QuestionDetails = (props) => {
  const { Question, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (Question) {
    return (
      <div className="container section Question-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{Question.title}</span>
            <p>{Question.content}</p>s
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {Question.authorFirstName} {Question.authorLastName}</div>
            <div>{moment(Question.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading Question...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const Questions = state.firestore.data.Questions;
  const Question = Questions ? Questions[id] : null
  return {
    Question: Question,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'Questions'
  }])
)(QuestionDetails)

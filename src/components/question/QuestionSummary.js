import React from 'react'
import moment from 'moment'

const QuestionSummary = ({Question}) => {
  return (
    <div className="card z-depth-0 Question-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{Question.title}</span>
        <p>Posted by {Question.authorFirstName} {Question.authorLastName}</p>
        <p className="grey-text">{moment(Question.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default QuestionSummary

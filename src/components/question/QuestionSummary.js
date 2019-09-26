import React from 'react'
import moment from 'moment'

const QuestionSummary = ({question}) => {
  return (
    <div className="card z-depth-0 Question-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{question.title}</span>
        <p>Posted by {question.authorFirstName} {question.authorLastName}</p>
        <p className="grey-text">{moment(question.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
} 

export default QuestionSummary

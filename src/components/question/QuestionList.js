import React from 'react'
import QuestionSummary from './QuestionSummary'
import { Link } from 'react-router-dom'

const QuestionList = ({Questions}) => {
  return (
    <div className="Question-list section">
      { Questions && Questions.map(Question => {
        return (
          <Link to={'/Question/' + Question.id} key={Question.id}>
            <QuestionSummary Question={Question} />
          </Link>
        )
      })}  
    </div>
  )
}

export default QuestionList

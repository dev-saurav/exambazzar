import React from 'react'
import "./QuestionsPage.module.css"
const QuestionsPage = ({ match }) => {
    console.log(match.params.examId)
    return (
        <div>
            questions page
        </div>
    )
}

export default QuestionsPage;
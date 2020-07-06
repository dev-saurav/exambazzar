//this is the questions page
import React, { useState, useEffect, useContext } from 'react'

import "./QuestionsPage.module.css"

import {
    Container, Paper, Chip, Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";

//import AppContext
import { AppContext } from '../../context/AppContext'

import Questions from '../../components/Questions/Questions'

//material ui styles
const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    paperStyles: {
        padding: "20px"
    },
    chipStyle: {
        cursor: "pointer",
        margin: "10px 5px",
        background: grey[500],
        color: "white"
    },
    navButtons: {
        display: "flex",
        justifyContent: "space-between"
    },

}));

//component //match.params.examId gives the exam id from the url
const QuestionsPage = ({ match }) => {
    //get the api call function from context
    const { getRandomQuestion, getParticularQuestion } = useContext(AppContext)
    //this will store the present question
    const [question, setQuestion] = useState({});
    //this will store the array of previous questions._id
    const [previousQuestion, setPreviousQuestions] = useState([])
    //material ui styles 
    const classes = useStyles()
    useEffect(() => {
        //pass the exam id into the api call for random question
        const apiCall = async () => {
            await getNewRandomQuestion()
        }
        apiCall()
    }, [])
    const getNewRandomQuestion = async (type) => {
        try {
            if (type === "next") {
                setPreviousQuestions([...previousQuestion, question._id])
            }
            const questionNew = await getRandomQuestion(match.params.examId)
            setQuestion(questionNew)
        } catch (error) {
            console.log(error)
        }
    }
    const getAParticularQuestion = async () => {
        try {
            let questionId = null;
            if (previousQuestion.length > 0) {
                const prevQues = [...previousQuestion]
                questionId = prevQues.pop()
                setPreviousQuestions(prevQues)
                const questionNew = await getParticularQuestion(match.params.examId, questionId)
                setQuestion(questionNew)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="md">
                <Paper className={classes.paperStyles} elevation={5}>
                    <div className={classes.navButtons}>
                        <Chip disabled={previousQuestion.length <= 0} className={classes.chipStyle} label="< Previous" onClick={() => getAParticularQuestion()} />
                        <Chip className={classes.chipStyle} label={question.exam} />
                        <Chip className={classes.chipStyle} onClick={() => getNewRandomQuestion("next")} label="Next >" />
                    </div>
                    <Divider />
                    <Questions question={question} />
                </Paper>
            </Container>
        </div>
    )
}

export default QuestionsPage;
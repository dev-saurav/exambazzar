//this is the questions page
import React, { useState, useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./QuestionsPage.module.css"

import {
    Container, Typography, Grid, Paper, Chip, Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";

//import AppContext
import { AppContext } from '../../context/AppContext'


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
    optionStyles: {
        cursor: "pointer",
        padding: "10px",
        background: grey[100],
        "&:hover": {
            background: grey[200]
        }
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
    questionText: {
        padding: "20px"
    }
}));

//component //match.params.examId gives the exam id from the url
const QuestionsPage = ({ match }) => {
    //get the api call function from context
    const { getRandomQuestion, getParticularQuestion } = useContext(AppContext)
    //this will store the present question
    const [question, setQuestion] = useState({});
    //this will store the present exam name
    const [examName, setExamName] = useState("")
    const [currExamId, setCurrExamId] = useState("")
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
                setPreviousQuestions([...previousQuestion, currExamId])
            }
            const question = await getRandomQuestion(match.params.examId)
            setCurrExamId(question._id)
            setExamName(question.exam)
            setQuestion(...question.questions)
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
                const question = await getParticularQuestion(match.params.examId, questionId)
                setCurrExamId(question._id)
                setExamName(question.exam)
                setQuestion(...question.questions)
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
                        <Chip className={classes.chipStyle} label={examName} />
                        <Chip className={classes.chipStyle} onClick={() => getNewRandomQuestion("next")} label="Next >" />
                    </div>
                    <Divider />
                    <Typography
                        className={classes.questionText}
                        variant="h6"
                        align="center"
                        paragraph
                    >
                        {question.question}
                    </Typography>
                    <div>
                        <Grid container spacing={2} justify="center">
                            {question.options ? question.options.map(option => (
                                <Grid key={uuidv4()} xs={12} item>
                                    <div className={classes.optionStyles}>{option.option}</div>
                                </Grid>
                            )) : null}
                        </Grid>
                    </div>
                </Paper>
            </Container>
        </div>
    )
}

export default QuestionsPage;
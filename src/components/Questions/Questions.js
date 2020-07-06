import React from 'react'
import { v4 as uuidv4 } from 'uuid';

//material ui imports
import { Typography, Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";

//styles
const useStyles = makeStyles(theme => ({
    questionText: {
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
    questionHeader: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0"
    },
    questionInfo: {
        display: "flex",
        flexDirection: "column"
    },
    questionNo: {
        fontSize: "1.2rem"
    },
    markings: {
        display: "flex"
    },
    correct: {
        padding: "10px",
        marginRight: "5px",
        background: "green"
    },
    wrong: {
        padding: "10px",
        background: "red"
    },
    contextImg: {
        margin: "10px",
        textAlign: "center",

    }
}))

const Questions = ({ question }) => {
    const classes = useStyles()
    return (
        <div>
            {/* render the context if any */}
            {question.context ? (<Typography
                className={classes.questionText}
                variant="h6"
                align="center"
                paragraph
            >{question.context}</Typography>) : null}
            {/* render all the questions */}
            {question.questions ? question.questions.map((q, index) => (
                <div key={uuidv4()}>
                    {/* this is the question header */}
                    <div className={classes.questionHeader}>
                        <div className={classes.questionInfo}>
                            <div className={classes.questionNo}>
                                Question
                            </div>
                            <div className={classes.testName}>
                                {question.test}
                            </div>
                        </div>
                        <div className={classes.markings}>
                            <div className={classes.correct}>
                                {/* check if marking is avilable */}
                                {q.marking ? q.marking.correct : null}
                            </div>
                            <div className={classes.wrong}>
                                {q.marking ? q.marking.incorrect : null}
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <Typography
                        className={classes.questionText}
                        variant="h6"
                        align="center"
                    >
                        {/* render the question */}
                        {q.question}
                        {/* render the images if any */}
                        {question.images ? question.images.map(image => (<div key={uuidv4()} className={classes.contextImg}><img src={image} alt="question-img"/></div>)) : null}
                        {q.images.length > 0 ?
                            q.images.map(image => (<img src={image} alt="question-img"/>))
                            : null}
                    </Typography>
                    <div>
                        <Grid container spacing={2} justify="center">
                            {/* render all the options of the question */}
                            {q.options ? q.options.map(option => (
                                <Grid key={uuidv4()} xs={12} item>
                                    <div className={classes.optionStyles}>{option.option}</div>
                                </Grid>
                            )) : null}
                        </Grid>
                    </div>
                </div>
            )) : null}
        </div>
    )
}

export default Questions;
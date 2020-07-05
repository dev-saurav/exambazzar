import React from 'react'

//imports from material ui
import { Card, CardMedia, CardContent, Typography, CardActions, Button, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//material-ui styles
const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%',
    },
    cardContent: {
        flexGrow: 1,
    },
}))

const LandingCards = ({ title, logo }) => {
    const classes = useStyles();
    return (
        <Card style={{ cursor: "pointer" }} className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={logo.black}
                img={{ padding: '5px' }}
                title="stream card"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" align="center">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default LandingCards;

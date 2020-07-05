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
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}))

const LandingCards = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    Heading
                    </Typography>
                <Typography>
                    This is a media card. You can use this section to describe the content.
                    </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    View
                    </Button>
                <Button size="small" color="primary">
                    Edit
                    </Button>
            </CardActions>
        </Card>
    )
}

export default LandingCards;

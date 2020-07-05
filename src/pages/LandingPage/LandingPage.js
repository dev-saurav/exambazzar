import React, { useContext, useEffect, useState } from 'react';
//import context
import { AppContext } from '../../context/AppContext'
//imports from material ui
import { AppBar, Button, CssBaseline, Grid, Toolbar, Typography, Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//components import
import LandingCards from '../../components/LandingCards/LandingCards'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
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

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LandingPage = () => {
    //get the required data and functions from App context
    const { getExamInfo } = useContext(AppContext)

    //inital state
    const [sortedExamData, setSortedExamData] = useState([])

    //side effect (on the first call)
    useEffect(() => {
        const examData = async () => {
            //sets the state
            setSortedExamData(await getExamInfo())
        }
        //calls the function
        examData()
    }, [])

    //classes for material ui styling
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Exambazaar
          </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            We at ExamBazaar
            </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Bring Exam prepration at your doorsteps.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Checkout Streams
                  </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Checkout Exams
                  </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {sortedExamData.map((stream) => (
                            <Grid item key={stream._id} xs={12} sm={6} md={4}>
                                <LandingCards title={stream.name} logo={stream.logo} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
        </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

export default LandingPage;
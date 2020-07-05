import React, { useContext, useEffect, useState } from 'react';
//import context
import { AppContext } from '../../context/AppContext'
//imports from material ui
import { AppBar, Button, CssBaseline, Grid, Toolbar, Typography, Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//component import 
import TabSection from '../../components/TabsSection/TabsSection'

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
                                        <a style={{ textDecoration: "none", color: "inherit" }} href="#streams">Checkout Streams</a>
                                    </Button>
                                </Grid>

                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container id="streams" maxWidth="md">
                    <TabSection data={sortedExamData} />
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    ExamBazaar
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    © 2020-2021
        </Typography>

            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

export default LandingPage;
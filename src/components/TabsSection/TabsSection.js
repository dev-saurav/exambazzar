import React from 'react'
import { Link } from 'react-router-dom'
//imports for material-ui
import { AppBar, Tabs, Tab, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//components import
import LandingCards from '../LandingCards/LandingCards'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TabSection({ data }) {
    const classes = useStyles();
    //set the tab 0 initally
    const [value, setValue] = React.useState(0);
    //handle change of tab
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="streams"
                >
                    {/* this sets the stream tabs on the page */}
                    {data.map((stream, index) => (
                        <Tab key={stream._id} label={stream.name} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </AppBar>
            {/* this sets the content of each stream tab */}
            {data.map((stream, index) => (
                <TabPanel key={stream._id} value={value} index={index}>
                    <Grid container spacing={4}>
                        {/* this maps all the exams for a particular stream */}
                        {stream.exams.map((exam) => (
                            <Grid item key={exam._id} xs={6} sm={3}>
                                {/* setup a link to questions page passing the id */}
                                <Link style={{ textDecoration: "none", color: "black" }} to={`/questions/${exam._id}`}>
                                    <LandingCards title={exam.name} logo={exam.logo} />
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
            ))}
        </div>
    );
}

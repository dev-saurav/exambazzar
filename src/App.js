import React from 'react';
//import css
import './App.module.css';
//import the pages
import LandingPage from './pages/LandingPage/LandingPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
//import react-router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    //the base router
    <Router>
      <Switch>
        {/* home page route */}
        <Route exact path="/">
          <LandingPage />
        </Route>
        {/* questions route */}
        <Route path="/questions">
          <QuestionsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

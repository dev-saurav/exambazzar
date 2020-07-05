import React from 'react';
//import context provider
import { AppContextProvider } from './context/AppContext'
//import css
import './App.module.css';
//import the pages
import LandingPage from './pages/LandingPage/LandingPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
//import react-router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    //providing context to the app
    <AppContextProvider>
      {/* base router */}
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
          {/* 404 route */}
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;

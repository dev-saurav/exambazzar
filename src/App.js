import React from 'react';
//import context provider
import { AppContextProvider } from './context/AppContext'
//import css
import './App.module.css';
//import the pages
import LandingPage from './pages/LandingPage/LandingPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
//import components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
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
        <NavBar />
        <Switch>
          {/* home page route */}
          <Route exact path="/exambazzar" component={LandingPage} />
          {/* questions route */}
          <Route path="/exambazzar/questions/:examId" component={QuestionsPage} />
          {/* 404 route */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <Footer />
    </AppContextProvider >
  );
}

export default App;

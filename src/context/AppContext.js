//this file provides all the api request call as well as maintains app state
import React, { createContext } from 'react'
//import axios to make api calls
import axios from 'axios'
//import constants
import { api_key, api_secret, baseURL } from '../constants/Constants'
//import utility functions
import { sortExamStreams } from '../utils/Utils'
//initial state
const initState = {}
//create global context
export const AppContext = createContext(initState)
//create global context provider
export const AppContextProvider = (props) => {
    //api calls

    //this will get the exam info
    //GET//baseURL/exam-info/:api-key
    const getExamInfo = async () => {
        try {
            //destructure the data
            const { data: { data } } = await axios.get(`${baseURL}/exam-info/${api_key}`)
            //destructure the exams and streams
            const { exams, streams } = data
            //use the utility function to sort the data
            return sortExamStreams(exams, streams)
        } catch (error) {
            console.log(error)
        }
    }
    //this will get the exam info
    //generate a new random question
    //POST//baseURL/random-question/
    const getRandomQuestion = async (examId) => {
        try {
            //set the body params
            const body = {
                api_key,
                api_secret,
                examId
            }
            //destructure the data
            const { data: { data } } = await axios.post(`${baseURL}/random-question`, body)
            //destructure the question
            const { question } = data
            return question;
        } catch (error) {
            console.log(error)
        }
    }
    //this will provide a particular question
    //POST//baseURL/random-question/
    const getParticularQuestion = async (examId, questionId) => {
        try {
            //set the body params
            const body = {
                api_key,
                api_secret,
                examId,
                questionId
            }
            //destructure the data
            const { data: { data } } = await axios.post(`${baseURL}/random-question`, body)
            //destructure the question
            const { question } = data
            return question;
        } catch (error) {
            console.log(error)
        }
    }
    return (
        //provide all the necessary values
        <AppContext.Provider value={{ getExamInfo, getRandomQuestion, getParticularQuestion }}>
            {props.children}
        </AppContext.Provider>
    )
}
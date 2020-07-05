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
    //baseURL/exam-info/:api-key
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
    return (
        <AppContext.Provider value={{ getExamInfo }}>
            {props.children}
        </AppContext.Provider>
    )
}
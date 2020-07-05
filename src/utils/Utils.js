//this file provides all utility functions

//this function provides a custom objext in which the exams are sorted in their stream
export const sortExamStreams = (exams, streams) => {
    //foreach stream
    streams.forEach(stream => {
        //add a new field ["exams"] onto the stream and init it as []
        stream["exams"] = []
        //traverse through the exam array and check stream.id === exam.id
        exams.forEach((exam, index) => {
            if (stream._id === exam.stream) {
                //if the id matches push the exam onto the stream
                stream["exams"].push(exam)
            }
        })
    })
    //return the modified streams
    return streams
} 
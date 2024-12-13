

import { saveSurveySubmission } from "./transientState.js"

export const saveSubmission = () => {
    document.addEventListener("click", handleSubmissions)
       
    return "<div><button id='SaveSubmission'>Save Submission</button></div>"
}

const handleSubmissions = (clickEvent) => {
     if (clickEvent.target.id === "SaveSubmission") {
            
        saveSurveySubmission()
    }
 }
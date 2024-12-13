// Set up the transient state data structure and provide initial valuess
const transientState={
    "ownsBlueJeans": false,
    "socioLocationId": 0
}


// Functions to modify each property of transient state

export const setOwnsBlueJeans = (chosenOwnership)=>{
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState)
}

export const setSocioLocationId = (chosenLocation)=>{
    transientState.socioLocationId = chosenLocation
    console.log(transientState)
}


// Function to convert transient state to permanent state

//Write a function in your TransientState module that will perform a fetch()
//  to send the transient state to your local API.

export const saveSurveySubmission = async() => {
    const postOptions = {
        method: "POST",  //<-- asking to create
        headers: {
            "Content-Type": "application/json"  //<--headers is an object, the key has to be a string, and what we sending(json)

        },
        body: JSON.stringify(transientState) //<-- converting data into jason string
     }
     
     const response = await fetch ("http://localhost:8088/submissions",postOptions)
//building custom event where we create new entry to JSON:
const customEvent = new CustomEvent ("newSubmissionCreated")
document.dispatchEvent(customEvent)


}    

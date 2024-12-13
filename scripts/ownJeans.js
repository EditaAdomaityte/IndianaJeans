//static html function:

import { setOwnsBlueJeans } from "./transientState.js"

export const ownJeansChoices = () => {
    document.addEventListener("change",handleOwnershipChange)
    let html = "<h2>Do you own a pair of blue jeans?</h2>"
        html += "<input type='radio' name='ownsJeans' value='true'/>Yes"
        html += "<input type='radio' name='ownsJeans' value='false'/>No"
     //if name is the same, can choose only one input, if name is not the same can choose both
    return html
}

//This is the function that will be executed when the user
//  changes which radio button is selected. Thus, a change 
// event will be broadcast by the browser.

 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
const handleOwnershipChange = (changeEvent) => {
     if (changeEvent.target.name === "ownsJeans") {
            const convertedToBoolean = JSON.parse(changeEvent.target.value)
            setOwnsBlueJeans(convertedToBoolean)
    }
 }
//function dynamically creates HTML:

import { setSocioLocationId } from "./transientState.js"

export const locationTypeChoices= async() => {
    document.addEventListener("change", handleLocationChange)
    const fetchedData = await fetch("http://localhost:3001/socioLocations")
    const locations = await fetchedData.json()

    let locationChoicesHTML="<h2> What kind of area do you live in?</h2>"
    const mapLocations = locations.map(
        (location) => {
            return `<input type='radio' name='location' value='${location.id}'/>${location.label}`
        }
    )
    // for (const location of locations) {
    //     locationChoicesHTML+= 
    locationChoicesHTML +=mapLocations.join("")

    return locationChoicesHTML
}

const handleLocationChange = (changeEvent) =>{
    if (changeEvent.target.name === "location") {
        const convertedToBoolean = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToBoolean)
    }
}
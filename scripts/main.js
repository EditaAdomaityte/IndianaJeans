import { locationTypeChoices } from "./location.js"
import { ownJeansChoices } from "./ownJeans.js"

const container = document.querySelector ("#container")

const putItonDOM = async() => {
    const jeanOwnerHtml=ownJeansChoices()
    const locationHtml=await locationTypeChoices()

    container.innerHTML = ` ${jeanOwnerHtml} 
                            ${locationHtml}`
}

putItonDOM()
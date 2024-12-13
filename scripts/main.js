import { locationTypeChoices } from "./location.js"
import { ownJeansChoices } from "./ownJeans.js"
import { saveSubmission } from "./savedSubmissions.js"
import { SubmissionList } from "./submissions.js"

const container = document.querySelector ("#container")

const putItOnDOM = async() => {
    const jeanOwnerHtml=ownJeansChoices()
    const locationHtml=await locationTypeChoices()
    const buttonHTML = await saveSubmission()
    const savedSubHTML= await SubmissionList()

    container.innerHTML = ` ${jeanOwnerHtml} 
                            ${locationHtml}
                            ${buttonHTML}
                            ${savedSubHTML}`
}




document.addEventListener("newSubmissionCreated",putItOnDOM)

putItOnDOM()
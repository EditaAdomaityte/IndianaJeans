export const SubmissionList = async () => {
    // Get the submissions from your API
    const getSubmissions = await fetch ("http://localhost:8088/submissions")
    const getSubmissionsTranslated = await getSubmissions.json()

    let previousSubmissionsHTML = "<h2>Previous Submissions:</h2>"
    // Iterate the submissions and create some <section> representations
    for(const submission of getSubmissionsTranslated){
        previousSubmissionsHTML +=`<section class="submission">
            <div>Owns Jeans? ${submission.ownsBlueJeans} </div>
            <div>Area type foreign key? ${submission.socioLocationId} </div>
            
        </section>`
    }

    // Return the HTML string
    return previousSubmissionsHTML
}
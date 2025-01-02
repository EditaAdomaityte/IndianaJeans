export const SubmissionList = async () => {
    // Get the submissions from your API
    const getSubmissions = await fetch ("http://localhost:3001/submissions")
    const submissions = await getSubmissions.json()

    let previousSubmissionsHTML = "<h2>Previous Submissions:</h2>"
    // Iterate the submissions and create some <section> representations
   const mapSubmissions = submissions.map(
    (submission) => {
        return `<section class="submission">
            <div>Owns Jeans? ${submission.ownsBlueJeans} </div>
            <div>Area type foreign key? ${submission.socioLocationId} </div>
            
        </section>`
    }
   )
   
    // for(const submission of getSubmissionsTranslated){
    //     previousSubmissionsHTML +=
    // }
    previousSubmissionsHTML += mapSubmissions.join("")
    // Return the HTML string
    return previousSubmissionsHTML
}
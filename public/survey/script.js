let answers = {};

function selectAnswer(questionName, answer) {
    answers[questionName] = answer;
}
document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', function () {
        selectAnswer(this.name, this.value);
    });
});


document.getElementById("survey-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    let score = 0;

    // Check if each answer is "Yes" and increment the score
    if (answers["quit-using-drugs"] === "Yes") score += 1;
    if (answers["drug-overdose"] === "Yes") score += 1;
    if (answers["need-drugs"] === "Yes") score += 1;
    if (answers["professional-help"] === "Yes") score += 1;
    if (answers["guilt-drug-use"] === "Yes") score += 1;
    if (answers["lied-drug-use"] === "Yes") score += 1;
    if (answers["relationships-drug-use"] === "Yes") score += 1;
    if (answers["withdrawal-symptoms"] === "Yes") score += 1;
    if (answers["job-loss-drug-use"] === "Yes") score += 1;
    if (answers["control-drug-use"] === "Yes") score += 1;
    if (answers["drove-under-influence"] === "Yes") score += 1;
    if (answers["arrested-drug-issues"] === "Yes") score += 1;
    if (answers["time-drugs"] === "Yes") score += 1;
    if (answers["anxious-without-drugs"] === "Yes") score += 1;
    if (answers["neglected-responsibilities"] === "Yes") score += 1;
    if (answers["think-about-drugs"] === "Yes") score += 1;
    if (answers["increase-drug-use"] === "Yes") score += 1;
    if (answers["relationship-issues-drugs"] === "Yes") score += 1;

    // Store the score in localStorage (or you can use query string if preferred)
    localStorage.setItem('surveyScore', score);

    // Redirect to the report page
    window.location.href = "report.html";
});

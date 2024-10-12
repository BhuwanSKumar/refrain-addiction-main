import React from 'react';
import './report.css';

const Report = () => {
    const score = localStorage.getItem('surveyScore') || 0; // Default to 0 if not found
    const formData = JSON.parse(localStorage.getItem('formData'));

    // Define report content based on score
    let reportTitle = '';
    let reportContent = '';

    if (score >= 0 && score <= 5) {
        reportTitle = 'Low Concern';
        reportContent = `Your responses indicate low levels of concern regarding drug use. It's great to see that you're maintaining a healthy relationship.`;
    } else if (score >= 6 && score <= 10) {
        reportTitle = 'Moderate Concern';
        reportContent = `You may want to keep an eye on your drug use, as some responses suggest moderate concern.`;
    } else if (score >= 11 && score <= 15) {
        reportTitle = 'High Concern';
        reportContent = `Your responses indicate a concerning pattern regarding drug use. Seeking professional help could be beneficial.`;
    } else if (score >= 16 && score <= 20) {
        reportTitle = 'Very High Concern';
        reportContent = `It's crucial that you seek immediate help, as your responses indicate significant concerns related to drug use.`;
    }

    return (
        <div className="report-page">
            <div className="report-container">
                <h1>Survey Report</h1>
                <div id="desc">Your Score: {score}</div>
                <h2>{reportTitle}</h2>
                <p>{reportContent}</p>
                <h4>Resources:</h4>
                <p>If you need help, please contact local support services or hotlines.</p>
                <p>National Toll-Free Helpline: <strong>1800-11-0031</strong></p>
                <p>Remember, seeking help is a sign of strength, and many paths lead to recovery.</p>
                <button className="back-button" onClick={() => window.history.back()}>Go Back to Survey</button>
            </div>
        </div>
    );
};

export default Report;

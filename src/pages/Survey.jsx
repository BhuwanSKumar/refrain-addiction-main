import React, { useEffect, useState } from 'react';
import './survey.css';

const Survey = () => {
    const [formData, setFormData] = useState({
        "drug-overdose": '',
        "current-drug-use": '',
        "received-treatment": '',
        "need-help": '',
        "medical-problems": '',
        "sought-help": '',
        "treatment-programs": '',
        "full-name": '',
        "email": ''
        // Include all other questions needed to total 20
    });

    // Load form data from localStorage when the component mounts
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
            setFormData(savedData);
        }
    }, []);

    // Save form data to localStorage when formData changes
    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Dynamically update the formData state based on input name
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from submitting

        const score = calculateScore(); // Calculate the score based on answers
        localStorage.setItem('surveyScore', score); // Store score in localStorage
        localStorage.setItem('formData', JSON.stringify(formData)); // Store formData in localStorage

        // Redirect to the report page
        window.location.href = "/report"; // Make sure this matches your routing setup
    };

    // Calculate score based on the formData
    const calculateScore = () => {
        let score = 0;

        // Scoring logic for each question
        if (formData["drug-overdose"] === "Yes") score += 1; // Question 1
        if (formData["multiple-drugs"] === "Yes") score += 1; // Question 2
        if (formData["weekly-use"] === "Yes") score += 1; // Question 3
        if (formData["prescription-abuse"] === "Yes") score += 1; // Question 4
        if (formData["quit-unsuccessful"] === "Yes") score += 1; // Question 5
        if (formData["guilt"] === "Yes") score += 1; // Question 6
        if (formData["relationships"] === "Yes") score += 1; // Question 7
        if (formData["neglect-family"] === "Yes") score += 1; // Question 8
        if (formData["problems-family"] === "Yes") score += 1; // Question 9
        if (formData["complaints"] === "Yes") score += 1; // Question 10
        if (formData["confrontations"] === "Yes") score += 1; // Question 11
        if (formData["lost-job"] === "Yes") score += 1; // Question 12
        if (formData["workplace-issues"] === "Yes") score += 1; // Question 13
        if (formData["arrest"] === "Yes") score += 1; // Question 14
        if (formData["illegal-activities"] === "Yes") score += 1; // Question 15
        if (formData["withdrawal-symptoms"] === "Yes") score += 1; // Question 16
        if (formData["flashbacks"] === "Yes") score += 1; // Question 17
        if (formData["medical-problems"] === "Yes") score += 1; // Question 18
        if (formData["sought-help"] === "Yes") score += 1; // Question 19
        if (formData["treatment-programs"] === "Yes") score += 1; // Question 20

        // Customize scoring logic as per your requirements
        return score;
    };
    return (
        <div className="survey-page" >
            <form id="survey-form" onSubmit={handleSubmit}>
                <fieldset className='fieldset'>

                    <h1 className='title'>Drug Use Survey</h1>

                    <div className='div'>
                        <p>1. Do you ever use drugs for something other than a medical reason?</p>
                        <label htmlFor="overdose-yes">
                            <input

                                type="radio"
                                id="overdose-yes"
                                name="drug-overdose"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="overdose-no">
                            <input
                                type="radio"
                                id="overdose-no"
                                name="drug-overdose"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>2. When you use drugs, do you use more than one drug at a time?</p>
                        <label htmlFor="multiple-drugs-yes">
                            <input
                                type="radio"
                                id="multiple-drugs-yes"
                                name="multiple-drugs"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="multiple-drugs-no">
                            <input
                                type="radio"
                                id="multiple-drugs-no"
                                name="multiple-drugs"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>3. Is your drug use more than one day per week?</p>
                        <label htmlFor="weekly-use-yes">
                            <input
                                type="radio"
                                id="weekly-use-yes"
                                name="weekly-use"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="weekly-use-no">
                            <input
                                type="radio"
                                id="weekly-use-no"
                                name="weekly-use"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>4. Do you have a history of abusing prescription drugs?</p>
                        <label htmlFor="prescription-abuse-yes">
                            <input
                                type="radio"
                                id="prescription-abuse-yes"
                                name="prescription-abuse"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="prescription-abuse-no">
                            <input
                                type="radio"
                                id="prescription-abuse-no"
                                name="prescription-abuse"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>
                    <div className='div'>
                        <p>5. Have you attempted to quit your drug use but been unsuccessful?</p>
                        <label htmlFor="quit-unsuccessful-yes">
                            <input
                                type="radio"
                                id="quit-unsuccessful-yes"
                                name="quit-unsuccessful"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="quit-unsuccessful-no">
                            <input
                                type="radio"
                                id="quit-unsuccessful-no"
                                name="quit-unsuccessful"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>6. Does your drug use cause feelings of guilt?</p>
                        <label htmlFor="guilt-yes">
                            <input
                                type="radio"
                                id="guilt-yes"
                                name="guilt"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="guilt-no">
                            <input
                                type="radio"
                                id="guilt-no"
                                name="guilt"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>7. Has your drug use ended relationships with friends?</p>
                        <label htmlFor="relationships-yes">
                            <input
                                type="radio"
                                id="relationships-yes"
                                name="relationships"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="relationships-no">
                            <input
                                type="radio"
                                id="relationships-no"
                                name="relationships"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>8. Do you find yourself neglecting your family because of your drug use?</p>
                        <label htmlFor="neglect-family-yes">
                            <input
                                type="radio"
                                id="neglect-family-yes"
                                name="neglect-family"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="neglect-family-no">
                            <input
                                type="radio"
                                id="neglect-family-no"
                                name="neglect-family"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>9. Has your drug use resulted in problems between you and your family members or friends?</p>
                        <label htmlFor="problems-family-yes">
                            <input
                                type="radio"
                                id="problems-family-yes"
                                name="problems-family"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="problems-family-no">
                            <input
                                type="radio"
                                id="problems-family-no"
                                name="problems-family"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>10. Do your family members or friends ever complain about your drug use?</p>
                        <label htmlFor="complaints-yes">
                            <input
                                type="radio"
                                id="complaints-yes"
                                name="complaints"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="complaints-no">
                            <input
                                type="radio"
                                id="complaints-no"
                                name="complaints"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>11. While under the influence of drugs, have you gotten into confrontations or fights with others?</p>
                        <label htmlFor="confrontations-yes">
                            <input
                                type="radio"
                                id="confrontations-yes"
                                name="confrontations"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="confrontations-no">
                            <input
                                type="radio"
                                id="confrontations-no"
                                name="confrontations"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>12. Has your drug use ever contributed to you losing a job?</p>
                        <label htmlFor="lost-job-yes">
                            <input
                                type="radio"
                                id="lost-job-yes"
                                name="lost-job"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="lost-job-no">
                            <input
                                type="radio"
                                id="lost-job-no"
                                name="lost-job"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>13. Has your drug use caused problems or gotten you into trouble at your workplace?</p>
                        <label htmlFor="workplace-issues-yes">
                            <input
                                type="radio"
                                id="workplace-issues-yes"
                                name="workplace-issues"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="workplace-issues-no">
                            <input
                                type="radio"
                                id="workplace-issues-no"
                                name="workplace-issues"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>14. Have you ever gone to jail or been arrested for illegal drug possession?</p>
                        <label htmlFor="arrest-yes">
                            <input
                                type="radio"
                                id="arrest-yes"
                                name="arrest"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="arrest-no">
                            <input
                                type="radio"
                                id="arrest-no"
                                name="arrest"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>15. Do you participate in illegal activities in order to get your drugs of choice?</p>
                        <label htmlFor="illegal-activities-yes">
                            <input
                                type="radio"
                                id="illegal-activities-yes"
                                name="illegal-activities"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="illegal-activities-no">
                            <input
                                type="radio"
                                id="illegal-activities-no"
                                name="illegal-activities"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>16. When you stop taking your drug, do you experience any withdrawal symptoms or feel sick?</p>
                        <label htmlFor="withdrawal-symptoms-yes">
                            <input
                                type="radio"
                                id="withdrawal-symptoms-yes"
                                name="withdrawal-symptoms"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="withdrawal-symptoms-no">
                            <input
                                type="radio"
                                id="withdrawal-symptoms-no"
                                name="withdrawal-symptoms"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>17. Has your drug use ever resulted in flashbacks or blackouts?</p>
                        <label htmlFor="flashbacks-yes">
                            <input
                                type="radio"
                                id="flashbacks-yes"
                                name="flashbacks"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="flashbacks-no">
                            <input
                                type="radio"
                                id="flashbacks-no"
                                name="flashbacks"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>
                    <div className='div'>
                        <p>18. Have you ever had medical problems such as memory loss, hepatitis, convulsions, bleeding, etc. as a result of your drug use?</p>
                        <label htmlFor="medical-problems-yes">
                            <input
                                type="radio"
                                id="medical-problems-yes"
                                name="medical-problems"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="medical-problems-no">
                            <input
                                type="radio"
                                id="medical-problems-no"
                                name="medical-problems"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>19. Have you sought help for your drug problem in the past?</p>
                        <label htmlFor="sought-help-yes">
                            <input
                                type="radio"
                                id="sought-help-yes"
                                name="sought-help"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="sought-help-no">
                            <input
                                type="radio"
                                id="sought-help-no"
                                name="sought-help"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>

                    <div className='div'>
                        <p>20. Have you participated in any treatment programs, either inpatient or outpatient, related to your drug use?</p>
                        <label htmlFor="treatment-programs-yes">
                            <input
                                type="radio"
                                id="treatment-programs-yes"
                                name="treatment-programs"
                                value="Yes"
                                required
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="treatment-programs-no">
                            <input
                                type="radio"
                                id="treatment-programs-no"
                                name="treatment-programs"
                                value="No"
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>
                    <div className='div'>
                        <label htmlFor="full-name">Full Name*</label>
                        <input
                            class="box large"
                            type="text"
                            id="full-name"
                            name="full-name"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className='div'>
                        <label htmlFor="email">Email*</label>
                        <input
                            class="box large"
                            type="email"
                            id="email"
                            name="email"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <button class="box1" type="submit" id="submit" name="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Survey;
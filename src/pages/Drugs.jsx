import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, Link } from 'react-router-dom';


const Drugs = () => {
    const navigate=useNavigate();

    const questions = [
        {
          question: 'How often do you use drugs?',
        },
        {
          question: 'How many drugs do you typically use in a single session?',
        },
        {
            question: 'Have you ever tried to cut down or control your drug use but could not?',
          },
          {
            question: 'Do you find it difficult to go for a significant period without using drugs?',
          },
          {
            question: 'Have you noticed that you need higher doses of drugs to achieve the same effect as before?',
          },
          {
            question: 'Do you often use drugs alone?',
          },
          {
            question: 'Have you experienced financial difficulties as a result of spending money on drugs?',
          },
          {
            question: 'Has your drug consumption ever caused problems in your personal relationships or friendships?',
          },
          {
            question: 'Have you ever faced any academic difficulties (e.g., failing in exams, missing an important deadline) due to consumption of drugs?',
          },
          {
            question: 'Has your alcohol consumption affected your mental or physical health negatively?',
          },
          {
            question: 'How often have you experienced withdrawal symptoms (e.g., anxiety, irritability, nausea) when you have not been using drugs for some time?',
          },
          {
            question: 'Do you spend a significant amount of time obtaining, using, or recovering from drugs?',
          },
          {
            question: 'Do you feel guilty or ashamed about your drug use?',
          },
      ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setError] = useState('');
  const [quizInfo, setQuizInfo] = useState(new Map());

  const handleAnswerSelect = (number,question) => {
    setSelectedAnswer(number);
    setQuizInfo((prevQuizInfo) => new Map(prevQuizInfo.set(question, number)));
  };

 

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('https://refrain-addiction-amitbatra31.vercel.app/answers', {
        quizInfo: Object.fromEntries(quizInfo),
      })
      .then(res=>{
        navigate("/drugSupp")
      })
      
    } catch (e) {
      console.log(e);
    }
  }

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setError('');
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer('');
    } else {
      setError('Please select an option');
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];

    return (
      <div className="p-4">
        {error && (
          <div className="bg-red-200 text-red-800 py-2 px-4 rounded-md mb-4">
            {error}
          </div>
        )}
        <h2 className="text-xl font-semibold mb-2 p-4">{question.question}</h2>
        <ul className="flex flex-wrap justify-center max-w-xl mx-auto">
          <div className="p-4">
            {Array.from(Array(5).keys()).map((number) => (
              <label key={number} className="mr-6 mb-4">
                <input
                  type="radio"
                  name="answer"
                  value={number + 1}
                  checked={selectedAnswer === number + 1}
                  onChange={() => handleAnswerSelect(number + 1, question.question)}
                  className="mr-2 appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-black checked:border-transparent"
                />
                <span>{number + 1}</span>
              </label>
            ))}
          </div>
        </ul>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleNextQuestion}
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    );
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white p-4 rounded shadow-lg">
       
        {currentQuestion < questions.length ? (
          renderQuestion()
        ) : (
          <>
             <div className='text-xl font-bold mb-6'>
            Your Quiz has been completed. Click on Submit button to see your score.
        </div>
          <Link to = "/drugSupp" className="w-full bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
              Submit
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Drugs;

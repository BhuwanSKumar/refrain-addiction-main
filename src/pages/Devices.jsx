import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Devices = () => {
    const questions = [
        {
          question: 'How often do you feel the need or urge to use device/internet?',
        },
        {
            question: 'Have you ever tried to cut down or control your device/internet usage?',
          },
          {
            question: 'Do you find it difficult to go for a significant period without using device/internet?',
          },
          {
            question: 'How much hours do you spend on daily basis on device/internet?',
          },
          {
            question: 'Has your device/internet usage ever caused problems in your personal relationships or friendships?',
          },
          {
            question: 'Have you ever faced any academic difficulties (e.g., failing in exams, missing an important deadline) due to usage of device/internet?',
          },
          {
            question: 'Do you experience restlessness or irritability when you can not use your devices?',
          },
          {
            question: 'Do you feel preoccupied with thoughts about using your device/internet even when you are not using it?',
          },
           {
            question: 'Have you tried to hide or minimize your device/internet usage from others?',
          },
          {
            question: 'Do you feel guilty or ashamed about your excessive device or internet usage?',
          },
          {
            question: 'Have u experienced a decrease in quality of your sleep cycle as a result of late-night device/internet usage?',
          },
          {
            question: 'How often do you experience headaches or eye-strain due to excessive use of device/internet?',
          },
          {
            question: 'How often do you use device/internet for your productivity?',
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

 

//   async function handleSubmit(e) {
//     e.preventDefault();
//     console.log(quizInfo);
//     try {
//     //   await axios.post('http://localhost:8000/answers', {
//     //     quizInfo: Object.fromEntries(quizInfo),
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }

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
            <Link to = "/support" className="w-full bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Devices;

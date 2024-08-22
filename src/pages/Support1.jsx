import React from 'react';
import { Link } from 'react-router-dom';
import { FaComment, FaQuestionCircle } from 'react-icons/fa';

function Support1() {
  const min = 1;
  const max = 10;
  const score = Math.floor(Math.random() * (max - min) + min);
  
  return (
    <>
    <div className='flex flex-col'>
      <span className='text-green-400 font-bold text-sm'>Level 1: Excellent</span>
      <span className='text-green-500 font-bold text-sm'>Level 2: Outstanding</span>
      <span className='text-yellow-300 font-bold text-sm'>Level 3: Satisfactory</span>
      <span className='text-yellow-400 font-bold text-sm'>Level 4: Average</span>
      <span className='text-yellow-500 font-bold text-sm'>Level 5: Mediocre</span>
      <span className='text-yellow-600 font-bold text-sm'>Level 6: Poor</span>
      <span className='text-orange-300 font-bold text-sm'>Level 7: Critical</span>
      <span className='text-orange-400 font-bold text-sm'>Level 8: Dire</span>
      <span className='text-orange-500 font-bold text-sm'>Level 9: Extreme</span>
      <span className='text-red-500 font-bold text-sm'>Level 10: Catastrophic</span>
    </div>
    <div className="flex flex-col items-center h-screen">
      <div className="text-2xl font-semibold mb-8">Your level is: {score}/10</div>
      <div className='w-1/2 text-green-500 font-mono mt-3'>
        1. If your level comes out to be in range of 1-5 you can refer the secondary support by clicking on the below button Chat with Us. This will redirect you to a page where you can ask for help from a smart chatBot. 
      </div><div className='w-1/2 text-yellow-500 font-mono mt-3 mb-3'>
        1. If your level comes out to be in range of 6-10 you can refer the tertiary support by clicking on the below button Need Assistance? This will redirect you to a page where you can schedule an appointment with your councelor and get help by connecting with them on a video/telephonic meeting.
      </div>
      <div className="flex flex-wrap justify-center">
        <Link to="/chat">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 sm:m-4">
            <FaComment className="inline-block mr-2" />
            Chat with us
          </button>
        </Link>
        <Link to="/Appointment/new">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2 sm:m-4">
          <FaQuestionCircle className="inline-block mr-2" />
          Need assistance?
        </button>
        </Link>

      </div>
    </div>
    </>
  );
}

export default Support1;

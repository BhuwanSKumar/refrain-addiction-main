import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Sidecounc } from '../components';
function Dashboard() {
  const [isApproved, setIsApproved] = useState(false);
  const [appointmentRequests, setAppointmentRequests] = useState([]);


  const location = useLocation();
  console.log(location.state.id);
  const email = location.state.id;
  useEffect(() => {
    const fetchAppointmentRequests = async () => {
      try {
        const response = await axios.get(
          'https://refrain-addiction-amitbatra31.vercel.app/api/appointments/requests',
        );
        setAppointmentRequests(response.data);
      } catch (error) {
        console.error('Error fetching appointment requests:', error);
      }
    };

    fetchAppointmentRequests();
  }, []);
  useEffect(() => {
    const handleCheckApproval = async () => {
      try {
        const response = await axios.post(
          'https://refrain-addiction-amitbatra31.vercel.app/api/counselors/approval',
          {
            email,
          },
        );
        const { isApproved } = response.data;
        setIsApproved(isApproved);
      } catch (error) {
        console.error('Error checking counselor approval status:', error);
      }
    };

    handleCheckApproval();
  }, []);

  const handleGenerateMeetingCode = async (mail) => {
    try {
      const response = await axios.patch(
        `https://refrain-addiction-amitbatra31.vercel.app/api/appointments/meeting`,
        {
          mail,
        },
      );

      setAppointmentRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === response.data.appointment._id
            ? response.data.appointment
            : request,
        ),
      );
    } catch (error) {
      console.error('Error generating meeting code:', error);
    }
  };

  return (
    <div>
      {isApproved ? (

        <>
        <div>
            <div className='mr-20'>
        <Sidecounc />
      </div>

          <div className='h-screen flex flex-col items-center '>
          <h1 className='mt-14 font-bold text-4xl font-Montserrat mb-4'>Welcome to the Dashboard!</h1>
         <div className='w-1/2 mt-4'>
           <ul className='flex flex-col'>
            {appointmentRequests.map((request) => (
              <li className='mb-2 grid grid-cols-3 gap-4' key={request._id}>
                <strong className=''>Email ID:</strong> {request.mail}
                {request.meetId ? (
                  <span>  Meeting ID: {request.meetId}</span>
                ) : (
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
                    onClick={() => handleGenerateMeetingCode(request.mail)}
                  >
                    Generate Meeting Code
                  </button>
                )}
              </li>
            ))}
          </ul>
         </div>
          <div className='text-xl mt-4'>
            <Link to="/" className='text-blue-500 hover:text-blue-900 hover:underline'>
            Click here... 
          </Link>
            to the logout!
          </div>
        </div>
        </div>
        
        </>
      ) : (
        <div className='h-screen flex flex-col items-center justify-center'>
          <h1 className='text-red-500 font-bold text-4xl font-Montserrat mb-4'>PENDING APPROVAL!</h1>
          <p className='text-black text-xl'>
            Your account is pending approval. Please wait for the administrator
            to approve your account.
          </p>
          <div className='text-xl mt-4'>
            <Link to="/" className='text-blue-500 hover:text-blue-900 hover:underline'>
            Click here... 
          </Link>
           to return to the home page
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

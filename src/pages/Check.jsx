import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components';
import useSharedStore from './Store';
import { Link } from 'react-router-dom';
const UserAppointments = ({ userId }) => {
  const [appointments, setAppointments] = useState([]);
  const email = useSharedStore((state) => state.sharedData);
  useEffect(() => {
    fetch(`https://refrain-addiction-amitbatra31.vercel.app/api/appointments/user/${email}`)
      .then((response) => response.json())
      .then((data) => setAppointments(data.appointments))
      .catch((error) => console.error('Error fetching appointments:', error));

    console.log(appointments);
  }, []);
  return (
    <div className="flex">
      <div className='h-screen sticky top-0'>
        <Sidebar />
      </div>
      <div className='w-full'>
        <div className='flex flex-col items-center mx-auto'>
        <div className='text-5xl font-bold text-blue-400 mb-10 mt-10'>
        Booked Appointments
      </div>
      <ul className='w-4/5'>
        {console.log(appointments)}
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            <div className='bg-blue-100 rounded-lg h-14 mb-4 px-2 py-2'>
              <div className='grid grid-cols-3 gap-4w mb-4 text-lg'>
                <span>
                  Meeting ID:
                  <span  className='text-blue-500'>{appointment.meetId || 'Not generated yet'}</span> 
                </span>
                <span>The Consultant: {appointment.consultantName}</span>
                <span>Time: {appointment.createdAt}</span>
              </div>
              
            </div>
          </li>
        ))}
      </ul>
      </div>
          <div className='flex flex-col items-center w-full'>
            <div className='text-lg mt-20'>
              Please copy the meeting ID and paste it here..
              <Link to="/meet" className='text-blue-500 hover:text-blue-800 hover:underline'>
               Click here
              </Link>
            </div>
          </div>
      </div>
    
    </div>
  );
};

export default UserAppointments;

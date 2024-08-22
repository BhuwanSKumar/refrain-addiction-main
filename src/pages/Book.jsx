import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components';
import ConsultantCard from '../components/ConsultantCard';
import axios from 'axios';

import useSharedStore from './Store';

import divider from '../assets/divider.svg'
import { Link } from 'react-router-dom';


function Book() {
  const [consultants, setConsultants] = useState([]);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [selectedConsultantName, setSelectedConsultantName] = useState(null);

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const email = useSharedStore((state) => state.sharedData);
  console.log('EMAIL' + email);
  const handleConsultantSelect = (consultantId, consultantName) => {
    setSelectedConsultant(consultantId);
    setSelectedConsultantName(consultantName);
  };
  const handleBookAppointment = async () => {

    if (!email) {
      alert('Please Login First');
      return;
    }
    setBookingSuccess(false);

    try {
      // Make an API call to book the appointment
      const response = await axios.post(
        'https://refrain-addiction-amitbatra31.vercel.app/api/appointments/book',
        {
          mail: email, // Replace with the actual user ID
          consultantId: selectedConsultant,
          consultantName: selectedConsultantName,
        },
      );
      setBookingSuccess(true);
      console.log(response.data); // Optional: Handle the response as needed

      // Reset the selected consultant after booking
      setSelectedConsultant(null);
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };
  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const response = await axios.get(
          'https://refrain-addiction-amitbatra31.vercel.app/api/counselors',
        );
        const cdata = response.data;
        const filteredData = cdata.filter((counselor) => {
          return counselor.isApproved === true;
        });
        setConsultants(filteredData);
      } catch (error) {
        console.error('Error fetching consultants:', error);
      }
    };

    fetchConsultants();
  }, []);

  return (
    <>
      <div className="flex">
        <div className='h-screen sticky top-0'>
          <Sidebar />
        </div>
        <div className="flex flex-col items-center mx-auto">
          <div className='text-5xl font-bold text-blue-400 mb-10 mt-10'>BOOK A NEW APPOINTMENT?</div>
          {/* <div className="container mx-auto flex-col flex-wrap">
          {consultants.map((consultant) => (
          <li key={consultant.id}>{consultant.name}</li>
        ))}
            <ConsultantCard {...consultant} />
          </div> */}
           <div class="divider__container mb-8">
            <img class="divider" src={divider} alt="divider" />
          </div>

          <div className="grid grid-cols-3 gap-4 w-full ml-20">
            {consultants.map((consultant) => (
              <>

                <button onClick={() => handleConsultantSelect(consultant._id, consultant.name)}
                className=' bg-blue-100 border-solid border-2 border-blue-200 rounded-2xl p-3 w-80'>
                  <ConsultantCard
                    key={consultant.id}
                    photo={consultant.photo}
                    name={consultant.name}
                    specialty={consultant.speciality}
                    age={consultant.age}
                  />
                </button>
              </>
            ))}
          </div>
          <div>
            {selectedConsultant && <div className='text-xl' >Booking for the counselor: <span className='text-red-400'>{selectedConsultantName}</span> whose booking ID is: <span className='text-red-400'>'{selectedConsultant}'</span></div>}
            {selectedConsultant && (
              <button onClick={handleBookAppointment} className='w-full mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Book Appointment</button>
            )}
            {bookingSuccess && <div className='text-green-600 text-2xl font-bold mt-10'>Appointment has been booked successfully!✨
            <div className='text-black font-normal text-base ml-20 mt-8 mb-20'>
              <Link to="/Appointment/past" className='text-blue-500 hover:text-blue-900 hover:underline'>
                Click here </Link> 
                to go to the appointment details.
            </div>
            
            </div>}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;

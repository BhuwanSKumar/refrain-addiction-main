import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components';
import axios from 'axios';
import divider from '../assets/divider.svg'
import useSharedStore from './Store';
import { client3 } from '../assets';

function Profile() {

  const [users, setUsers] = useState([]);
  const email = useSharedStore((state) => state.sharedData);

  
   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://refrain-addiction-amitbatra31.vercel.app/api/userss?email=${email}`
        );
        const udata = response.data;
        setUsers(udata);
      } catch (error) {
        console.error('Error fetching User:', error);
      }
    };

    fetchUsers();
  }, []);


  return (
    <>
      <div className='flex'>
        <div className='h-screen sticky top-0'>
          <Sidebar/>
        </div>
        <div className='flex flex-col items-center mx-auto'>
          <div className='text-5xl font-bold text-blue-400 mb-10 mt-10'>YOUR DETAILS</div>
          <div class="divider__container mb-8">
            <img class="divider" src={divider} alt="divider" />
          </div>
          <div className='flex flex-row'>
            <div className='w-80'>
            <img className='w-80 mt-16 rounded-full' src={client3} alt="Profile" />
          </div>
          <div className='flex flex-col gap-5  mt-16 ml-20'>
            <span className='text-2xl bg-blue-100 h-16 px-4 py-2 text-blue-500 rounded-lg font-bold'>Name: {users.name}</span>
            <span className='text-2xl bg-blue-100 h-16 px-4 py-2 text-blue-500 rounded-lg font-bold'>Email: {users.email}</span>
            <span className='text-2xl bg-blue-100 h-16 px-4 py-2 text-blue-500 rounded-lg font-bold'>City: {users.city}</span>
            <span className='text-2xl bg-blue-100 h-16 px-4 py-2 text-blue-500 rounded-lg font-bold'>College: {users.college}</span>

          </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Profile
import React, { useEffect, useState } from 'react'
import { Sideadmin, UserCard } from '../components'
import axios from 'axios';

function Userdata() {

  const [usrs, setUsrs] = useState([]);


useEffect(() => {
    const fetchTheUsers = async () => {
      try {
        const response = await axios.get(
          'https://refrain-addiction-amitbatra31.vercel.app/api/usrs',
        );
        const udta = response.data;
        setUsrs(udta);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchTheUsers();
  }, []);


  return (
    <div className='flex'>
      <div className='h-screen sticky top-0'>
        <Sideadmin/>
      </div>
      
         <div className=''>
          <div className='ml-96 text-4xl font-bold mt-6'>
            List of users connected to the website....!
          </div>
          <div className="ml-72 mt-8">
            {usrs.map((user) => (
              <>
                <button 
                className=' bg-blue-100 border-solid border-2 border-blue-200 rounded-2xl p-2 w-3/4'>
                  <UserCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    college={user.college}
                    addiction={user.addiction}
                    city={user.city}
                  />
                </button>
              </>
            ))}
          </div>
         </div>
      </div>
  )
}

export default Userdata
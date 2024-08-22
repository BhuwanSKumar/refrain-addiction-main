import React from 'react';
import pic from '../assets/client3.png'

const UserCard = ({name, email, college, addiction, city }) => {
  
  return (
    <div className=" overflow-hidden ">
        <div className="font-bold text-xl text-blue-900 flex ml-2">
          <img className='w-10 rounded-full mr-2' src={pic} alt="" />
          {name}</div>
      <div className="px-2 py-2 grid grid-cols-4 gap-3w">
        <p className="text-gray-700 text-base"> Email: {email}</p>
        <p className="text-gray-700 text-base">College: {college}</p>
        <p className="text-gray-700 text-base">Addiction: {addiction}</p>
        <p className="text-gray-700 text-base">City: {city}</p>
      </div>
    </div>
  );
};

export default UserCard;

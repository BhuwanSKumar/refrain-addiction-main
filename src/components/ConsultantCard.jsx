import React from 'react';
import pic from '../assets/client4.png'

const ConsultantCard = ({ photo, name, specialty, age }) => {
  const min = 1;
  const max = 4;
  const mn = 6;
  const mx = 12;
  const t1 = Math.floor(Math.random() * (max - min) + min);
  const t2 = Math.floor(Math.random() * (mx - mn) + mn);

  return (
    <div className=" overflow-hidden flex flex-col">
      <img className=" w-1/2 mx-auto mt-2 rounded-full" src={pic} alt={name} />
      <div className="px-2 py-2">
        <div className="font-bold text-xl mb-2">Name: {name}</div>
        <p className="text-gray-700 text-base"> Speciality: {specialty}</p>
        <p className="text-gray-700 text-base">Age: {age} years old</p>
        <p className="text-gray-700 text-base">Time Slot: {t1}:00 - {t2}:00</p>
      </div>
    </div>
  );
};

export default ConsultantCard;

import React, { useState } from 'react';
import VideoCall from '../components/VideoCall';
import { Sidecounc } from '../components';
function Meet() {
  const [identity, setIdentity] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState('');
  const handleJoinCall = async () => {
    if (identity && roomName) {
      try {
        const response = await fetch('https://refrain-addiction-amitbatra31.vercel.app/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ identity, roomName }),
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setToken(data.token);
        } else {
          console.log('Failed to fetch Twilio access token');
        }
      } catch (error) {
        console.log(
          'Error occurred while fetching Twilio access token:',
          error,
        );
      }
    }
  };

  return (
    <div className="flex">
      <div className='h-screen sticky top-0'>
            < Sidecounc />
          </div>
      <div className='flex flex-col w-1/2 ml-80'>
        <input className='h-20 my-12 rounded-xl px-10'
          type="text"
          placeholder="Enter your identity"
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
        />
        <input 
        className='h-20 rounded-xl px-10'
          type="text"
          placeholder="Enter room name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6' onClick={handleJoinCall}>Join Call</button>
        {token && (
          <div>
            <h1>Reclaim Video App</h1>
            <VideoCall token={token} identity={identity} roomName={roomName} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Meet;

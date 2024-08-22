// JoinCall.js
import React, { useState } from 'react';
import SimpleWebRTC from 'simplewebrtc';

function JoinCall() {
  const [roomCode, setRoomCode] = useState('');

  const handleJoinCall = () => {
    if (roomCode.trim() !== '') {
      const webrtc = new SimpleWebRTC({
        url: 'https://signaling.simplewebrtc.com:443',

        room: roomCode,
      });

      webrtc.on('readyToCall', () => {
        webrtc.joinRoom(roomCode);
      });

      setRoomCode('');
    }
  };

  return (
    <div>
      <h2>Join Video Call</h2>
      <p>Enter the room code to join the call:</p>
      <input
        type="text"
        placeholder="Room Code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
      />
      <button onClick={handleJoinCall}>Join Call</button>
    </div>
  );
}

export default JoinCall;

import React, { useEffect, useRef, useState } from 'react';
import TwilioVideo from 'twilio-video';
import './styles.css';

function Participant({ participant, local }) {
  const videoRef = useRef(null);
  const [isMicrophoneOn, setMicrophoneOn] = useState(true);
  const [isCameraOn, setCameraOn] = useState(true);

  useEffect(() => {
    const trackSubscribed = (track) => {
      if (track.kind === 'video' && videoRef.current) {
        videoRef.current.appendChild(track.attach());
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === 'video' && videoRef.current) {
        track.detach().forEach((element) => element.remove());
      }
    };

    participant.on('trackSubscribed', trackSubscribed);
    participant.on('trackUnsubscribed', trackUnsubscribed);

    return () => {
      participant.removeAllListeners();
    };
  }, [participant]);

  const handleToggleMicrophone = () => {
    const audioTrack = participant.audioTracks.get(0)?.track;
    if (audioTrack) {
      audioTrack.enable(!isMicrophoneOn);
      setMicrophoneOn(!isMicrophoneOn);
    }
  };

  const handleToggleCamera = () => {
    const videoTrack = participant.videoTracks.get(0)?.track;
    if (videoTrack) {
      videoTrack.enable(!isCameraOn);
      setCameraOn(!isCameraOn);
    }
  };

  const handleLeaveParticipant = () => {
    participant.tracks.forEach((publication) => {
      const track = publication.track;
      if (track) {
        track.stop();
        publication.unpublish();
      }
    });
  };

  return (
    <div>
      <div ref={videoRef}></div>
      <div>
        <button
          className={`control-button ${isMicrophoneOn ? '' : 'off'}`}
          onClick={handleToggleMicrophone}
        >
          {isMicrophoneOn ? 'Microphone On' : 'Microphone Off'}
        </button>
        <button
          className={`control-button ${isCameraOn ? '' : 'off'}`}
          onClick={handleToggleCamera}
        >
          {isCameraOn ? 'Camera On' : 'Camera Off'}
        </button>
      </div>
      {local ? null : (
        <button className="leave-button" onClick={handleLeaveParticipant}>
          Leave
        </button>
      )}
    </div>
  );
}

function VideoCall({ token, identity, roomName }) {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [participants, setParticipants] = useState([]);

  let room = null;

  useEffect(() => {
    const connectToRoom = async () => {
      try {
        room = await TwilioVideo.connect(token, {
          video: true,
          audio: true,
          name: roomName,
          dominantSpeaker: true,
          bandwidthProfile: {
            video: {
              mode: 'grid',
              maxTracks: 25,
              renderDimensions: {
                high: { width: 1280, height: 720 },
                standard: { width: 640, height: 480 },
                low: { width: 320, height: 240 },
              },
            },
          },
        });

        // Attach local video track to the local video element
        if (localVideoRef.current) {
          TwilioVideo.createLocalVideoTrack().then((track) => {
            localVideoRef.current.appendChild(track.attach());
          });
        }

        // Attach remote video tracks to the remote video element
        room.on('trackSubscribed', (track, participant) => {
          if (track.kind === 'video' && remoteVideoRef.current) {
            remoteVideoRef.current.appendChild(track.attach());
            setParticipants((prevParticipants) => [
              ...prevParticipants,
              participant,
            ]);
          }
        });

        // Handle participant disconnect
        room.on('participantDisconnected', (participant) => {
          console.log(`Participant ${participant.identity} has disconnected.`);
          setParticipants((prevParticipants) =>
            prevParticipants.filter((p) => p.identity !== participant.identity),
          );
          // Remove remote video tracks if needed
        });

        // Handle room disconnect
        room.on('disconnected', (room) => {
          console.log(`Room ${room.name} has disconnected.`);
          // Clean up and handle UI changes if needed
        });
      } catch (error) {
        console.log('Error occurred while connecting to the room:', error);
      }
    };

    if (token && identity && roomName) {
      connectToRoom();
    }

    return () => {
      if (room) {
        room.disconnect();
      }
      TwilioVideo.disconnect();
    };
  }, [token, identity, roomName]);

  const handleLeaveCall = () => {
    if (room) {
      // Stop local video track and disconnect camera
      room.localParticipant.tracks.forEach((publication) => {
        const track = publication.track;
        if (track) {
          track.stop();
          publication.unpublish();
        }
      });

      room.disconnect();
    }
  };

  return (
    <div>
      <div ref={localVideoRef}></div>
      <div ref={remoteVideoRef}></div>
      {participants.map((participant) => (
        <div key={participant.identity}>
          <Participant
            participant={participant}
            local={participant.identity === identity}
          />
        </div>
      ))}
      <button className="leave-button" onClick={handleLeaveCall}>
        Leave Call
      </button>
    </div>
  );
}

export default VideoCall;

import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Video from '../components/Video';

const RTC_CONFIGURATION = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    {
      urls: 'turn:numb.viagenie.ca',
      credential: 'muazkh',
      username: 'webrtc@live.com'
    }
  ]
};

let pc: RTCPeerConnection;

const socket = io('https://osamhack2022-web-mili-meet-broker-g55g59rv9qjhwwq5-8080.githubpreview.dev');

socket.on('answer', (data) => {
  console.log(data);
});

function Caller() {
  const [mediaStream, setMediaStream] = useState<MediaStream>();

  async function setDisplayMediaStream() {
    const displayMediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: false, video: true });
    setMediaStream(displayMediaStream);
  }

  useEffect(() => {
    if (mediaStream === undefined) return;

    pc = new RTCPeerConnection(RTC_CONFIGURATION);

    mediaStream.getTracks().forEach((track) => pc.addTrack(track));

    pc.onicecandidate = (ev) => {
      if (ev.candidate === null) return;
      console.log('Caller onicecandidate', ev);
    };

    (async () => {
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      console.log('Caller Offer', offer);
    })();
  }, [mediaStream]);

  return (
    <>
      <Video mediaStream={mediaStream} />
      <Button variant='contained' onClick={setDisplayMediaStream}>getDisplayMedia</Button>
    </>
  )
}

export default Caller;

import { Button } from '@mui/material';
import { useState } from 'react';
import Video from '../components/Video';

// const RTC_CONFIGURATION = {
//   iceServers: [
//     { urls: 'stun:stun.l.google.com:19302' },
//     {
//       urls: 'turn:numb.viagenie.ca',
//       credential: 'muazkh',
//       username: 'webrtc@live.com'
//     }
//   ]
// };

// async function makePeerConnection(mediaStream: MediaStream) {
//   let pc = new RTCPeerConnection(RTC_CONFIGURATION);
//   mediaStream.getTracks().forEach((track) => {
//     pc.addTrack(track);
//   });

//   pc.onicecandidate = (event) => {
//     if (event.candidate != null) {
//       // socket.emit('candidate', { candidate: event.candidate });
//       console.log('Candidate Sent:', { candidate: event.candidate });
//     }
//   };

//   pc.oniceconnectionstatechange = () => {
//     if (pc.iceConnectionState === "disconnected") {
//       pc.close();
//       console.log("PC CLOSED!!!@#!@#!@#!");
//     }
//   };

//   const offer = await pc.createOffer();
//   await pc.setLocalDescription(offer);
//   console.log('offer:', pc.localDescription);
//   // socket.emit('offer', { offer: pc.localDescription });
// }

function Caller() {
  const [mediaStream, setMediaStream] = useState<MediaStream>();

  async function setDisplayMediaStream() {
    const displayMediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: false, video: true });
    setMediaStream(displayMediaStream);
  }

  return (
    <>
      <Video mediaStream={mediaStream} />
      <Button variant='contained' onClick={setDisplayMediaStream}>getDisplayMedia</Button>
    </>
  )
}

export default Caller;

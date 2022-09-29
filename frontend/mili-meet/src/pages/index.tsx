import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
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

let caller: RTCPeerConnection;
let callee: RTCPeerConnection;

function Index() {
  const [callerMediaStream, setcallerMediaStream] = useState<MediaStream>();
  const [calleeMediaStream, setcalleeMediaStream] = useState<MediaStream>();

  async function setDisplayMediaStream() {
    const displayMediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: false, video: true });
    setcallerMediaStream(displayMediaStream);
  }

  useEffect(() => {
    if (callerMediaStream === undefined) return;

    caller = new RTCPeerConnection(RTC_CONFIGURATION);
    callee = new RTCPeerConnection(RTC_CONFIGURATION);

    callerMediaStream.getTracks().forEach((track) => caller.addTrack(track));

    caller.onicecandidate = (ev) => {
      console.log('caller iceCandidated', ev);
      if (ev.candidate === null) return;
      callee.addIceCandidate(ev.candidate);
    };

    callee.onicecandidate = (ev) => {
      console.log('callee iceCandidated', ev)
      if (ev.candidate === null) return;
      caller.addIceCandidate(ev.candidate);
    };

    callee.ontrack = (ev) => {
      console.log('callee onTrack', ev);
      const mediaStream = new MediaStream([ev.track]);
      setcalleeMediaStream(mediaStream);
    }

    (async () => {
      const offer = await caller.createOffer();
      await caller.setLocalDescription(offer);
      await callee.setRemoteDescription(offer);
      const answer = await callee.createAnswer();
      await callee.setLocalDescription(answer);
      await caller.setRemoteDescription(answer);
    })();
  }, [callerMediaStream]);

  return (
    <>
      <Video mediaStream={callerMediaStream} />
      <br />
      <Video mediaStream={calleeMediaStream} />
      <Button variant='contained' onClick={setDisplayMediaStream}>getDisplayMedia</Button>
    </>
  )
}

export default Index;

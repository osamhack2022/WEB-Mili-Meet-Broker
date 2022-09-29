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

let pc: RTCPeerConnection;

function Callee() {
  const [mediaStream, setMediaStream] = useState<MediaStream>();

  useEffect(() => {
    if (mediaStream === undefined) return;

    pc = new RTCPeerConnection(RTC_CONFIGURATION);

    pc.onicecandidate = (ev) => {
      if (ev.candidate === null) return;
      console.log('Callee onicecandidate', ev);
    };

    pc.ontrack = (ev) => {
      console.log('Callee ontrack', ev);
      const mediaStream = new MediaStream([ev.track]);
      setMediaStream(mediaStream);
    }
  }, [mediaStream]);

  return (
    <>
      <Video mediaStream={undefined} />
    </>
  )
}

export default Callee;

import { useEffect, useState } from 'react';
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

function Callee() {
  const [mediaStream, setMediaStream] = useState<MediaStream>();

  useEffect(() => {
    pc = new RTCPeerConnection(RTC_CONFIGURATION);

    pc.onicecandidate = (ev) => {
      if (ev.candidate === null) return;
      socket.emit('calle-icecandidate', ev.candidate);
    };
    pc.ontrack = (ev) => {
      console.log(ev.track);
      const mediaStream = new MediaStream([ev.track]);
      setMediaStream(mediaStream);
    };

    socket.on('offer', async (offer: RTCSessionDescription) => {
      await pc.setRemoteDescription(offer);
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      socket.emit('answer', answer);
    });
    socket.on('caller-icecandidate', (candidate: RTCIceCandidate)  => {
      pc.addIceCandidate(candidate)
    });
  }, []);

  return (
    <>
      <Video mediaStream={mediaStream} />
    </>
  )
}

export default Callee;

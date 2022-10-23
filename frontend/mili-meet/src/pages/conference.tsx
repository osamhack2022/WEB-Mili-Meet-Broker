import { styled } from '@mui/material';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import BottomBar from '../components/conference/BottomBar';
import ConferenceGrid from '../components/conference/ConferenceGrid';
import SideBar from '../components/conference/SideBar';
import TopBar from '../components/conference/TopBar';

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

const Background = styled('div')({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#d9d9d9',
  display: 'flex',
  flexDirection: 'column'
});

const MainContainer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex'
});

const Main = styled('div')({
  width: '100%',
  height: '100%',
  backgroundColor: '#212121',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});


let outboundPC: RTCPeerConnection;
let inboundPC: RTCPeerConnection;

const socket = io('https://osamhack2022-web-mili-meet-broker-7rrgrq5695q2pp9-8080.preview.app.github.dev');

socket.on('answer', (answer: RTCSessionDescription) => {
  console.log('outbound answer', answer)
  outboundPC.setRemoteDescription(answer);
});
socket.on('outbound-icecandidate', (candidate: RTCIceCandidate)  => {
  console.log('outbound icecandidate', candidate)
  outboundPC.addIceCandidate(candidate);
});

socket.on('offer', async (offer: RTCSessionDescription) => {
  console.log('inbound offer', offer)
  await inboundPC.setRemoteDescription(offer);
  const answer = await inboundPC.createAnswer();
  await inboundPC.setLocalDescription(answer);
  socket.emit('answer', answer);
});
socket.on('inbound-icecandidate', (candidate: RTCIceCandidate)  => {
  console.log('inbound icecandidate', candidate);
  inboundPC.addIceCandidate(candidate);
});

function Conference() {
  const [outboundMediaStream, setOutboundMediaStream] = useState<MediaStream>();
  const [inboundMediaStream, setInboundMediaStream] = useState<MediaStream>();

  async function setDisplayMediaStream() {
    const displayMediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: false, video: true });
    setOutboundMediaStream(displayMediaStream);
  }

  useEffect(() => {
    socket.emit('connected');
  }, []);
  
  // outbound PC initalize
  useEffect(() => {
    outboundPC = new RTCPeerConnection(RTC_CONFIGURATION);

    outboundPC.onicecandidate = (ev) => {
      if (ev.candidate === null) return;
      socket.emit('outbound-icecandidate', ev.candidate);
    };
  }, []);

  // inbound PC initalize
  useEffect(() => {
    inboundPC = new RTCPeerConnection(RTC_CONFIGURATION);

    inboundPC.onicecandidate = (ev) => {
      if (ev.candidate === null) return;
      socket.emit('inbound-icecandidate', ev.candidate);
    };

    inboundPC.ontrack = (ev) => {
      console.log(ev.track);
      const mediaStream = new MediaStream([ev.track]);
      setInboundMediaStream(mediaStream);
    };
  }, []);

  useEffect(() => {
    if (outboundMediaStream === undefined) return;

    outboundMediaStream.getTracks().forEach((track) => outboundPC.addTrack(track));

    (async () => {
      const offer = await outboundPC.createOffer();
      await outboundPC.setLocalDescription(offer);
      socket.emit('offer', offer);
    })();
  }, [outboundMediaStream]);

  return (
    <Background>
      <TopBar />
      <MainContainer>
        <SideBar />
        <Main>
          <ConferenceGrid outbound={outboundMediaStream} inbound={inboundMediaStream} />
          <BottomBar setDisplayMediaStream={setDisplayMediaStream} />
        </Main>
      </MainContainer>
    </Background>
  );
}

export default dynamic(() => Promise.resolve(Conference), { ssr: false });

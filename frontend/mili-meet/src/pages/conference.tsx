import { styled } from '@mui/material';
import { useSession } from 'next-auth/react';
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
  height: '90vh',
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


type TChat = {
  type: string;
  msg: string;
}[];

const socket = io('https://osamhack2022-web-mili-meet-broker-7rrgrq5695q2pp9-8088.preview.app.github.dev');

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

function sendChat(msg: string) {
  socket.emit('chat', msg);
}

function Conference() {
  const [outboundMediaStream, setOutboundMediaStream] = useState<MediaStream>();
  const [inboundMediaStream, setInboundMediaStream] = useState<MediaStream>();

  const [gridMode, setGridMode] = useState(false);

  const [chat, setChat] = useState<TChat>([])

  const [inboundUsername, setInboundUsername] = useState<string>();

  const { data } = useSession();

  async function setDisplayMediaStream() {
    const displayMediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: false, video: true });
    setOutboundMediaStream(displayMediaStream);
  }

  useEffect(() => {
    if (!data?.user?.name) return;
    socket.emit('connected', data?.user?.name);
  }, [data?.user?.name]);

  // chat socket init
  useEffect(() => {
    socket.on('chat', (chat) => {
      setChat((c) => [...c, chat]);
    });

    socket.on('username', (username: string) => {
      setInboundUsername(username);
    });
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
      <TopBar setGridMode={setGridMode} />
      <MainContainer>
        <SideBar chat={chat} sendChat={sendChat} />
        <Main>
          <ConferenceGrid outbound={outboundMediaStream} inbound={inboundMediaStream} gridMode={gridMode} inboundUsername={inboundUsername} />
          <BottomBar setDisplayMediaStream={setDisplayMediaStream} />
        </Main>
      </MainContainer>
    </Background>
  );
}

export default dynamic(() => Promise.resolve(Conference), { ssr: false });

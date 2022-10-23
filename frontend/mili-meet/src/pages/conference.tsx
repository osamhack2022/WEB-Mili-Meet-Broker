import { styled } from '@mui/material';
import { useState } from 'react';
import { io } from 'socket.io-client';
import BottomBar from '../components/conference/BottomBar';
import ConferenceGrid from '../components/conference/ConferenceGrid';
import SideBar from '../components/conference/SideBar';
import TopBar from '../components/conference/TopBar';

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

const socket = io('https://osamhack2022-web-mili-meet-broker-7rrgrq5695q2pp9-8080.preview.app.github.dev');

let callersPC: RTCPeerConnection[] = [];
let calleesPC: RTCPeerConnection[] = [];

function Conference() {
  const [callerMediaStream, setCallerMediaStream] = useState<MediaStream>();

  async function setDisplayMediaStream() {
    const displayMediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: false, video: true });
    setCallerMediaStream(displayMediaStream);
  }

  return (
    <Background>
      <TopBar />
      <MainContainer>
        <SideBar />
        <Main>
          <ConferenceGrid caller={callerMediaStream} />
          <BottomBar setDisplayMediaStream={setDisplayMediaStream} />
        </Main>
      </MainContainer>
    </Background>
  );
}

export default Conference;

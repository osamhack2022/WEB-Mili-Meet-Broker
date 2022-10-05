import { styled } from '@mui/material';
import { Typography, Fab, Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';

const Background = styled('div')({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#d9d9d9',
  display: 'flex'
});

const SideBar = styled('div')({
  width: '20%',
  minWidth: '300px',
  height: '100%'
});

const MainContainer = styled('div')({
  width: '80%',
  maxWidth: 'calc(100% - 300px)',
  height: '100%'
});

const TopBar = styled('div')({
  width: '100%',
  height: '15%'
});

const Main = styled('div')({
  width: '100%',
  height: '85%',
  backgroundColor: '#212121',
  display: 'flex',
  flexDirection: 'column'
});

// -----------------------------------------------

const ConferenceGrid = styled('div')`
  flex: 1;
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
`

const ConferenceUser = styled('div')`
  background-color: #646464;
  aspect-ratio: 16 / 9;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ConferenceUserProfile = styled(Avatar)`
  background-color: #ff9800;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
`

const ConferenceUserName = styled(Typography)`
  color: white;
`

// -----------------------------------------------

const BottomBar = styled('div')`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  &::after {
    content: '';
    flex: 1;
  }
`;

const Description = styled('div')({
  color: 'white',
  flex: 1
});

const FabGroup = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`;

// -----------------------------------------------

function Conference() {
  return (
    <Background>
      <SideBar></SideBar>
      <MainContainer>
        <TopBar></TopBar>
        <Main>
          <ConferenceGrid>
            <ConferenceUser>
              <ConferenceUserProfile alt="ABC" src="/" />
              <ConferenceUserName>이름1</ConferenceUserName>
            </ConferenceUser>
            <ConferenceUser></ConferenceUser>
            <ConferenceUser></ConferenceUser>
            <ConferenceUser></ConferenceUser>
            <ConferenceUser></ConferenceUser>
            <ConferenceUser></ConferenceUser>
            <ConferenceUser></ConferenceUser>
            <ConferenceUser></ConferenceUser>
            <ConferenceUser></ConferenceUser>
            <ConferenceUser></ConferenceUser>
            <ConferenceUser></ConferenceUser>
            <ConferenceUser></ConferenceUser>
          </ConferenceGrid>
          <BottomBar>
            <Description>
              <Typography variant='h4'>화상회의 제목</Typography>
              <Typography>ABCDEF123</Typography>
            </Description>
            <FabGroup>
              <Fab color='default' size='medium'><MicIcon /></Fab>
              <Fab color='default' size='medium'><VideocamIcon /></Fab>
              <Fab color='default' size='medium'><MoreVertIcon /></Fab>
              <Fab color='error' size='medium'><CallEndIcon /></Fab>
            </FabGroup>
          </BottomBar>
        </Main>
      </MainContainer>
    </Background>
  );
}

export default Conference;

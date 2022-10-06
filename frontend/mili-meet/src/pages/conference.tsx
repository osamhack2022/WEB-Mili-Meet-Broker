import { styled } from '@mui/material';
import { Typography, Fab, Avatar, TextField, Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';
import CampaignIcon from '@mui/icons-material/Campaign';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SendIcon from '@mui/icons-material/Send';


const Background = styled('div')({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#d9d9d9',
  display: 'flex'
});

// -----------------------------------------------

const SideBar = styled('div')({
  width: '20%',
  minWidth: '300px',
  height: '100%'
});

const SettingFab = styled(Fab)`
  margin: 1rem;
`

const ConnectedUserList = styled('div')`

`;

const ConnectedUser = styled('div')`
  display: flex;
  justify-content: space-around;
`;

const ChatList = styled('div')`

`;

const SendChat = styled('div')`
  display: flex;
  justify-content: space-around;
`;

// -----------------------------------------------

const MainContainer = styled('div')({
  width: '80%',
  maxWidth: 'calc(100% - 300px)',
  height: '100%'
});

const TopBar = styled('div')({
  width: '100%',
  height: '15%',
  minHeight: '100px'
});

const Main = styled('div')({
  width: '100%',
  height: '85%',
  maxHeight: 'calc(100% - 100px)',
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
`;

const ConferenceUser = styled('div')`
  background-color: #646464;
  aspect-ratio: 16 / 9;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: .5rem;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const ConferenceUserProfile = styled(Avatar)`
  background-color: #ff9800;
  width: 60px;
  height: 60px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ConferenceUserName = styled(Typography)`
  color: white;
  margin: .5rem;
`;

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
      <SideBar>
        <SettingFab color="primary"><SettingsIcon /></SettingFab>
        <ConnectedUserList>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>접속인원</Typography>
          <ConnectedUser>
            <CampaignIcon />
            <Typography>당직사령</Typography>
          </ConnectedUser>
          <ConnectedUser>
            <PersonIcon />
            <Typography>당직사관</Typography>
          </ConnectedUser>
        </ConnectedUserList>
        <ChatList>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>문자대화</Typography>
          <Typography sx={{ textAlign: 'left' }}>당직사령: ㅁㅁㅁ</Typography>
          <Typography sx={{ textAlign: 'right' }}>당직사관: ㅁㅁㅁ</Typography>
        </ChatList>
        <SendChat>
          <TextField rows="2" label="문자입력" multiline />
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </SendChat>
      </SideBar>
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

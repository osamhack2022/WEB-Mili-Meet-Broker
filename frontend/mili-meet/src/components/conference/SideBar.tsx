import { styled } from '@mui/material';
import { Typography, TextField, Button, Divider } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';


const SideBarContainer = styled('div')({
  width: '20%',
  minWidth: '300px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

const ConnectedUserList = styled('div')`

`;

const ConnectedUser = styled('div')`
  display: flex;
  justify-content: space-around;
  margin: .5rem 0;
  border: 1px solid black;
  border-radius: .5rem;
`;

const ChatContainer = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem 0;
`;

const ChatList = styled('div')`

`;

const SendChat = styled('div')`
  display: flex;
  justify-content: space-around;
  gap: .5rem;
`;

function SideBar() {
  return (
    <SideBarContainer>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', margin: '0 10%' }}>
        <Divider />
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
        <Divider />
        <ChatContainer>
          <ChatList>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>문자대화</Typography>
            <div>
              <Typography sx={{ textAlign: 'left' }}>당직사령: ㅁㅁㅁ</Typography>
              <Typography sx={{ textAlign: 'right' }}>당직사관: ㅁㅁㅁ</Typography>
            </div>
          </ChatList>
          <SendChat>
            <TextField rows="2" label="문자입력" multiline />
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </SendChat>
        </ChatContainer>
      </div>
    </SideBarContainer>
  );
}

export default SideBar;

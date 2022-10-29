import { styled } from '@mui/material';
import { Typography, TextField, Button, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';


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
  margin: .5rem auto;
  border: 1px solid black;
  border-radius: .5rem;
  width: 70%;
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

function SideBar({ chat, sendChat, inboundUsername }: { chat: any, sendChat: any, inboundUsername?: string }) {
  const [textField, setTextField] = useState('');

  const { data } = useSession();

  const onClick = () => {
    sendChat(textField);
    setTextField('');
  }

  console.log(chat);

  return (
    <SideBarContainer>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', margin: '0 10%' }}>
        <Divider />
        <ConnectedUserList>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>접속인원</Typography>
          <ConnectedUser>
            <PersonIcon />
            <Typography>{data?.user?.name}</Typography>
          </ConnectedUser>
          {(inboundUsername) && (
            <ConnectedUser>
              <PersonIcon />
              <Typography>{inboundUsername}</Typography>
            </ConnectedUser>
          )}
        </ConnectedUserList>
        <Divider />
        <ChatContainer>
          <ChatList>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>문자대화</Typography>
            <div>
              {chat.map(({ type, msg }: { type: 'caller' | 'callee', msg: string }, idx: number) => {
                const author = (type === 'caller') ? data?.user?.name : inboundUsername;
                return <Typography sx={{ textAlign: ((type === 'caller') ? 'left' : 'right') }} key={idx}>{author}: {msg}</Typography>;
              })}
            </div>
          </ChatList>
          <SendChat>
            <TextField rows="2" label="문자입력" multiline value={textField} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTextField(e.target.value)} />
            <Button variant="contained" endIcon={<SendIcon />} onClick={onClick}>
              Send
            </Button>
          </SendChat>
        </ChatContainer>
      </div>
    </SideBarContainer>
  );
}

export default SideBar;

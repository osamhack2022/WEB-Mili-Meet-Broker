import { styled } from '@mui/material';
import { Typography, Fab } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';

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
  backgroundColor: '#212121'
});

const BottomBar = styled('div')({

});

const Description = styled('div')({
  color: 'white'
});

function Conference() {
  return (
    <Background>
      <SideBar></SideBar>
      <MainContainer>
        <TopBar></TopBar>
        <Main>
          <BottomBar>
            <Description>
              <Typography variant='h4'>화상회의 제목</Typography>
              <Typography>ABCDEF123</Typography>
            </Description>
            <Fab color='default'><MicIcon /></Fab>
            <Fab color='default'><MicIcon /></Fab>
            <Fab color='default'><MicIcon /></Fab>
            <Fab color='default'><MicIcon /></Fab>
          </BottomBar>
        </Main>
      </MainContainer>
    </Background>
  );
}

export default Conference;

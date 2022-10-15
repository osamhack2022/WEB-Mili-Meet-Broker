import { styled } from '@mui/material';
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

function Conference() {
  return (
    <Background>
      <TopBar />
      <MainContainer>
        <SideBar />
        <Main>
          <ConferenceGrid />
          <BottomBar />
        </Main>
      </MainContainer>
    </Background>
  );
}

export default Conference;

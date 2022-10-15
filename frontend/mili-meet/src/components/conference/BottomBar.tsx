import { styled } from '@mui/material';
import { Typography, Fab } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';

const BottomBarContainer = styled('div')`
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

function BottomBar() {
  return (
    <BottomBarContainer>
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
    </BottomBarContainer>
  );
}

export default BottomBar;

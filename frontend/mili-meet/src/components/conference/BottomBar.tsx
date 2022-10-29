import { styled } from '@mui/material';
import { Typography, Fab } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallEndIcon from '@mui/icons-material/CallEnd';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

function BottomBar({ setDisplayMediaStream }: { setDisplayMediaStream: any }) {
  const router = useRouter();
  const id = router.query.id;

  return (
    <BottomBarContainer>
      <Description>
        <Typography variant='h4'>화상회의 제목</Typography>
        <Typography>{id}</Typography>
      </Description>
      <FabGroup>
        <Fab color='default' size='medium'><MicIcon /></Fab>
        <Fab color='default' size='medium' onClick={setDisplayMediaStream}><VideocamIcon /></Fab>
        <Link href="/">
          <Fab color='error' size='medium'><CallEndIcon /></Fab>
        </Link>
      </FabGroup>
    </BottomBarContainer>
  );
}

export default BottomBar;

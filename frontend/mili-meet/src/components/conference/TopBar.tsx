import { Fab, styled } from '@mui/material';
import { Typography, IconButton } from '@mui/material';
import { Dual, Multiple } from '../../components/svg';
import SettingsIcon from '@mui/icons-material/Settings';


const TopBarContainer = styled('div')({
  width: '100%',
  height: '10%',
  minHeight: '100px',
  display: 'flex',
  alignItems: 'center',
});

const SettingFab = styled(Fab)`
  margin: 1rem;
`

const GridPositionButtons = styled('div')`
  width: 100%;
`;

function TopBar({ setGridMode }: { setGridMode: any }) {
  return (
    <TopBarContainer>
      <div style={{ width: '20%', minWidth: '300px' }}>
        <SettingFab color="primary"><SettingsIcon /></SettingFab>
      </div>
      <GridPositionButtons>
        <Typography variant='h5'>배치모드</Typography>
        <IconButton size='large' onClick={() => setGridMode(false)}><Dual /></IconButton>
        <IconButton size='large' onClick={() => setGridMode(true)}><Multiple /></IconButton>
      </GridPositionButtons>
    </TopBarContainer>
  );
}

export default TopBar;

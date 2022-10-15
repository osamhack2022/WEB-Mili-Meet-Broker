import { Fab, styled } from '@mui/material';
import { Typography, IconButton } from '@mui/material';
import { Dual, Multiple, OneToN, Quad } from '../../components/svg';
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

function TopBar() {
  return (
    <TopBarContainer>
      <div style={{ width: '20%', minWidth: '300px' }}>
        <SettingFab color="primary"><SettingsIcon /></SettingFab>
      </div>
      <GridPositionButtons>
        <Typography variant='h5'>배치모드</Typography>
        <IconButton size='large'><Dual /></IconButton>
        <IconButton size='large'><Quad /></IconButton>
        <IconButton size='large'><Multiple /></IconButton>
        <IconButton size='large'><OneToN /></IconButton>
      </GridPositionButtons>
    </TopBarContainer>
  );
}

export default TopBar;

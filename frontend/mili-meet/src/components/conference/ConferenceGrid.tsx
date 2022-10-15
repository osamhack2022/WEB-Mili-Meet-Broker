import { styled } from '@mui/material';
import { Typography, Avatar } from '@mui/material';

const ConferenceGridContainer = styled('div')`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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

function ConferenceGrid() {
  return (
    <ConferenceGridContainer>
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
    </ConferenceGridContainer>
  );
}

export default ConferenceGrid;

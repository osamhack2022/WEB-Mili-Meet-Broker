import { styled } from '@mui/material';
import { Typography, Avatar } from '@mui/material';
import Video from '../Video';

const ConferenceGridContainer = styled('div')`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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

function ConferenceGrid({ outbound, inbound }: { outbound: any, inbound: any }) {
  return (
    <ConferenceGridContainer>
      <Video mediaStream={outbound}>
        <ConferenceUserProfile alt="ABC" src="/" />
        <ConferenceUserName>이름1</ConferenceUserName>
      </Video>
      <Video mediaStream={inbound}></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
    </ConferenceGridContainer>
  );
}

export default ConferenceGrid;

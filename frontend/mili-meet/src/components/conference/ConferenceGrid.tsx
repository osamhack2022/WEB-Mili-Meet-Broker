import { styled } from '@mui/material';
import { Typography, Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';
import Video from '../Video';

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

function ConferenceGrid({ outbound, inbound, gridMode, inboundUsername }: { outbound: any, inbound: any, gridMode: boolean, inboundUsername?: string }) {

  if (gridMode === true) {
    return <Grid12 outbound={outbound} inbound={inbound} inboundUsername={inboundUsername} />;
  } else {
  return <Grid2 outbound={outbound} inbound={inbound} inboundUsername={inboundUsername} />
  }
}

const Grid12Container = styled('div')`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`

function Grid12({ outbound, inbound, inboundUsername }: { outbound: any, inbound: any, inboundUsername?: string }) {
  const { data } = useSession();

  return (
    <Grid12Container>
      <Video mediaStream={outbound}>
        <ConferenceUserProfile alt={data?.user?.name?.[0]} src="/" />
        <ConferenceUserName>{data?.user?.name}</ConferenceUserName>
      </Video>
      {(inboundUsername) ? (
        <Video mediaStream={inbound}>
          <ConferenceUserProfile alt={inboundUsername[0]} src="/" />
          <ConferenceUserName>{inboundUsername}</ConferenceUserName>
        </Video>
      ) : (
        <Video></Video>
      )}
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
    </Grid12Container>
  )
}

const Grid2Container = styled('div')`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

function Grid2({ outbound, inbound, inboundUsername }: { outbound: any, inbound: any, inboundUsername?: string }) {
  const { data } = useSession();

  return (
    <Grid2Container>
      <Video mediaStream={outbound}>
        <ConferenceUserProfile alt={data?.user?.name?.[0]} src="/" />
        <ConferenceUserName>{data?.user?.name}</ConferenceUserName>
      </Video>
      {(inboundUsername) ? (
        <Video mediaStream={inbound}>
          <ConferenceUserProfile alt={inboundUsername[0]} src="/" />
          <ConferenceUserName>{inboundUsername}</ConferenceUserName>
        </Video>
      ) : (
        <Video></Video>
      )}
    </Grid2Container>
  );
}

export default ConferenceGrid;

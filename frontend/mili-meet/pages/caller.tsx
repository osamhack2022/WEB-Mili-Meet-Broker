import { Button } from '@mui/material';
import { useState } from 'react';
import Video from '../components/Video';

function Caller() {
  const [mediaStream, setMediaStream] = useState<MediaStream>();

  async function setDisplayMediaStream() {
    const displayMediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: false, video: true });
    setMediaStream(displayMediaStream);
  }

  return (
    <>
      <Video mediaStream={mediaStream} />
      <Button variant='contained' onClick={setDisplayMediaStream}>getDisplayMedia</Button>
    </>
  )
}

export default Caller;

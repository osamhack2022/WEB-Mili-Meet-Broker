import { styled } from '@mui/material';
import { RefObject, useEffect } from 'react';

interface VideoProps {
  mediaStream: MediaStream | undefined;
  test: RefObject<HTMLVideoElement> | undefined;
}

const VideoStyled = styled('video')({
  backgroundColor: 'black'
});

function Video({ mediaStream, test }: VideoProps) {

  useEffect(() => {
    if (mediaStream === undefined || test === undefined || test.current === null) return;
    test.current.srcObject = mediaStream;
  }, [mediaStream, test]);

  return (
    <VideoStyled ref={test} width="640" height="360" autoPlay></VideoStyled>
  );
}

export default Video;

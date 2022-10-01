import { styled } from '@mui/material';
import { useEffect, useRef } from 'react';

interface VideoProps {
  mediaStream: MediaStream | undefined;
}

const VideoStyled = styled('video')({
  backgroundColor: 'black'
});

function Video({ mediaStream }: VideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (mediaStream === undefined) return;
    if (ref.current === null) return;
    ref.current.srcObject = mediaStream;
    ref.current.play();
  }, [mediaStream, ref]);

  return (
    <VideoStyled ref={ref} width="640" height="360" muted autoPlay></VideoStyled>
  );
}

export default Video;

import { styled } from '@mui/material';
import { useEffect, useRef } from 'react';

interface VideoProps {
  mediaStream: MediaStream | undefined;
}

const VideoStyled = styled('video')({
  backgroundColor: 'black'
});

function Video({ mediaStream }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!mediaStream || !videoRef.current) return;
    videoRef.current.srcObject = mediaStream;
  }, [mediaStream, videoRef]);

  return (
    <VideoStyled ref={videoRef} width="640" height="360" autoPlay></VideoStyled>
  );
}

export default Video;

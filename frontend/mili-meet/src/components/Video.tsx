import { styled } from '@mui/material';
import { useEffect, useRef } from 'react';

interface VideoProps {
  mediaStream: MediaStream | undefined;
}

const VideoStyled = styled('video')`
  background-color: #646464;
  aspect-ratio: 16 / 9;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: .5rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

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

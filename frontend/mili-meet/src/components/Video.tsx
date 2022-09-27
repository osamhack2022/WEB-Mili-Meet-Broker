import { styled } from '@mui/material';
import { ForwardedRef, forwardRef, useEffect } from 'react';

interface VideoProps {
  mediaStream: MediaStream | undefined;
}

const VideoStyled = styled('video')({
  backgroundColor: 'black'
});

function Video({ mediaStream }: VideoProps, ref: ForwardedRef<HTMLVideoElement>) {

  useEffect(() => {
    if (mediaStream === undefined) return;
    if (typeof ref === 'function' || ref === null || ref.current === null) return;
    ref.current.srcObject = mediaStream;
  }, [mediaStream, ref]);

  return (
    <VideoStyled ref={ref} width="640" height="360" autoPlay></VideoStyled>
  );
}

export default forwardRef<HTMLVideoElement, VideoProps>(Video);

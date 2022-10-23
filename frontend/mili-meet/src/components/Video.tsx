import { styled } from '@mui/material';
import { useEffect, useReducer, useRef } from 'react';

interface VideoProps {
  mediaStream: MediaStream | undefined;
  children: any;
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

function Video({ children, mediaStream }: VideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  // eslint-disable-next-line no-unused-vars
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (mediaStream === undefined) return;
    if (ref.current === null) return;
    ref.current.srcObject = mediaStream;
    ref.current.play();

    mediaStream.getTracks()[0].onended = () => {
      forceUpdate();
    }
  }, [mediaStream, ref]);


  if ((mediaStream === undefined && children !== undefined) || mediaStream?.active === false) {
    return (
      <div style={{ backgroundColor: '#646464', borderRadius: '.5rem', position: 'relative' }}>
        {children}
      </div>
    )
  }

  return (
    <VideoStyled ref={ref} width="640" height="360" muted autoPlay></VideoStyled>
  );
}

export default Video;

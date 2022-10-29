import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
// 따로 정의한 파일이다. keycloak instance, option 들을 가져온다.
import keycloak from '../../../../keycloak/keycloak';
import RoomCode from "./roomCode";
function Index() {
  return (
  <>
  <ReactKeycloakProvider
  initOptions={{ onLoad: 'login-required'}}
  authClient={keycloak}>
    <RoomCode />
    </ReactKeycloakProvider>
  </>
  )
}

export default Index;

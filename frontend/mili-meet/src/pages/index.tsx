import { ReactKeycloakProvider } from '@react-keycloak/web';
// 따로 정의한 파일이다. keycloak instance, option 들을 가져온다.
import keycloak, { initOptions, onKeycloakEvent } from '../../../../keycloak/keycloak';
import RoomCode from "./roomCode";
function Index() {
  return (
  <>
    <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={initOptions}
    onEvent={onKeycloakEvent}
    >
    <RoomCode />
  </ReactKeycloakProvider>
  </>
  )
}

export default Index;

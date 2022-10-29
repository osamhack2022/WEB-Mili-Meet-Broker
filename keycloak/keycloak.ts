import Keycloak from "keycloak-js";

// 위에 설정한 realm, client_id, url 로 keycloak instance 를 생성한다.
let keycloak = new Keycloak({
  url: "https://osamhack2022-v2-web-mili-meet-broker-gv5wqp76qjx2v66p-3000.preview.app.github.dev/",
  realm: "Mili-meet",
  clientId: "public-client",
 });

export default keycloak;
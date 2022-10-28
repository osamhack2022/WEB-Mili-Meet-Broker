## Keycloak 도커 실행 방법

`docker run -p 8080:8080 --rm -it $(docker build -q .)`

## 설정 방법

Realm 생성
Client 생성

Client authentication true
Authentication flow {
  Standard flow
  Direct access grants
  Service accounts roles
}

Valid redirect URIs: *

credential 탭에서 Client secret 설정

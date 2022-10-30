# Mili Meet(밀리미트)
![Mili-Meet](https://user-images.githubusercontent.com/98392401/198857744-47c9666c-f5a1-4188-8fd7-5429032ae49a.png)

## 프로잭트 소개
> 코로나 19 이후 비대면 시대가 열리면서 군대 내에서도 화상회의가 잦아지고 있습니다. 당직 근무를 하면서 매일 하는 화상회의는 너무나도 익숙합니다. 그러나 군대 내에서 사용하는 화상회의 프로그램들은 무겁고 사용법도 어려울 뿐만 아니라 화상회의 프로그램만으로 진행되는 것이 아닌 오디오 믹서나 웹캠 카메라 등 여러 장비를 따로 조정해야 합니다. 이런 상황에서 화상회의가 진행중일 때 화상회의 방에 접속을 못하거나, 스피커나 마이크 소리가 문재 있는 상황이 벌어지면 항상 통신 관련 병사나 간부님들을 부르는 것이 다반사인 상황입니다.

이런 상황에서 저희는 접근성이 높은 웹 기반으로 화상회의 프로젝트를 진행하게 되었습니다.
밀리미트는 웹 기반의 실시간 화상회의 서비스로 좀 더 가볍고(Light), 쉬운(Easy) 화상회의 서비스를 지향하고 있습니다.

## 기능 설명
1. 비디오, 오디오 실시간 스트리밍
	- WebRTC를 이용한 P2P 스트리밍
	- 비디오, 오디오 인풋뿐만 아니라 화면공유까지 지원
2. 화상회의 세션 생성 및 수정
3. 화상회의 참여자 초대 및 권한
	- 호스트 권한으로 회의 종료 등 가능
4. 인증 처리
	- 회원가입, 로그인, 로그아웃 등
5. 화상회의 오디오 믹서 기능

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome 버젼 77 이상

## 기술 스택 (Technique Used)
### Server(back-end)
![](https://img.shields.io/badge/nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=Express&logoColor=white)

![](https://img.shields.io/badge/webrtc-333333?style=for-the-badge&logo=WebRTC&logoColor=white)
![](https://img.shields.io/badge/socketio-010101?style=for-the-badge&logo=Socket.io&logoColor=white)
![](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white)


### Front-end
![](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![](https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![](https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=MUI&logoColor=white)

![](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)
![](https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white)
![](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white)

![](https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white)

## 설치 안내 (Installation Process)

```bash
$ git clone https://github.com/osamhack2022/WEB_Mili-Meet_Broker.git
$ yarn or npm install
$ yarn start or npm run start
```

## 프로젝트 사용법 (Getting Started)

Frontend 실행 방법
```bash
$ cd /workspaces/WEB_Mili-Meet_Broker/frontend
$ npm i
$ docker build -t next .
$ docker run -dP next
```
Backend 실행 방법
```bash
$ cd /workspaces/WEB_Mili-Meet_Broker/backend
$ npm i
$ node index.js
```

Keycloak 실행 방법
```bash
keycloak readme 문서 참고
```
## 팀 정보 (Team Information)
- JunSang Yu (junsang.yu3@gmail.com), Github Id: stupidJoon
- Minjun Lee (sohwi0305gmail.com), Github Id: min0305
- Kwanghyeon Jo (gwangh7@gmail.com), Github Id: Kidprogramer1039

## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)

This project is licensed under the terms of the MIT license.

※ [라이선스 비교표(클릭)](https://olis.or.kr/license/compareGuide.do)

※ [Github 내 라이선스 키워드(클릭)](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository)

※ [\[참조\] Github license의 종류와 나에게 맞는 라이선스 선택하기(클릭)](https://flyingsquirrel.medium.com/github-license%EC%9D%98-%EC%A2%85%EB%A5%98%EC%99%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0-ae29925e8ff4)

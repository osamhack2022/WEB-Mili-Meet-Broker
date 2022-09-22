FROM ubuntu:20.04

WORKDIR /app

# install nodejs
RUN apt update
RUN apt -y install curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt -y install nodejs

COPY mili-meet/package.json ./

RUN npm i

COPY mili-meet/. .

RUN npm run build

EXPOSE 3000

CMD npm start

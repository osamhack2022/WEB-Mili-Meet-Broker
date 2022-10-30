FROM ubuntu:20.04

WORKDIR /app

# install nodejs
RUN apt update
RUN apt -y install curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt -y install nodejs

COPY . .

RUN npm ci

CMD node index.js

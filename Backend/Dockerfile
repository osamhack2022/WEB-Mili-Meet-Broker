FROM ubuntu:18.04

FROM node:12-alpine
WORKDIR /server
COPY package*.json /server
RUN npm install
COPY . /server
CMD [ "npm", "start" ]
EXPOSE 8080
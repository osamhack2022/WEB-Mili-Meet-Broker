import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors());
app.use(cookieParser());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' },
  cookie: true
});

const sessions = {};

let callerUsername;

io.on('connection', (socket) => {
  const sessionID = 'abcd';
  let session;
  let type;

  socket.on('connected', (username) => {
    session = sessions[sessionID];
    type = (session === undefined) ? 'caller' : 'callee';

    if (type === 'caller') {
      sessions[sessionID] = { caller: socket, callee: undefined }
      session = sessions[sessionID];
      callerUsername = username;
    } else {
      session.callee = socket;
      session.caller.emit('username', username);
      session.callee.emit('username', callerUsername);
    }

    console.log(type, 'connected')
  });

  socket.on('disconnect', () => {
    if (session === undefined) return;
    if (type === 'caller') sessions[sessionID] = undefined;
    else session.callee = undefined;

    console.log(type, 'disconnected')
  });

  socket.on('offer', (offer) => {
    if (type === 'caller') {
      session.callee.emit('offer', offer);
    } else {
      session.caller.emit('offer', offer);
    }
  });

  socket.on('answer', (answer) => {
    if (type === 'caller') {
      session.callee.emit('answer', answer);
    } else {
      session.caller.emit('answer', answer);
    }
  });

  socket.on('inbound-icecandidate', (icecandidate) => {
    if (type === 'caller') {
      session.callee.emit('outbound-icecandidate', icecandidate);
    } else {
      session.caller.emit('outbound-icecandidate', icecandidate);
    }
  });

  socket.on('outbound-icecandidate', (icecandidate) => {
    if (type === 'caller') {
      session.callee.emit('inbound-icecandidate', icecandidate);
    } else {
      session.caller.emit('inbound-icecandidate', icecandidate);
    }
  });

  // 채팅
  socket.on('chat', (chat) => {
    console.log(type, chat);
    if (type === 'caller') {
      session.callee.emit('chat', { type: 'caller', msg: chat });
    } else {
      session.caller.emit('chat', { type: 'callee', msg: chat });
    }
  });
});

httpServer.listen(8088);

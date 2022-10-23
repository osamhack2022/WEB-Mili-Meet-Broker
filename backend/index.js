import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';
import cors from 'cors';
import cookie from 'cookie';
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

// app.get('/create-session', (req, res) => {
//   const sessionID = Math.random().toString(36).substring(2);
//   sessions[sessionID] = { caller: id, callee: [] };

// });

io.on('connection', (socket) => {
  const sessionID = 'abcd';
  let session = sessions[sessionID];

  if (sessions[session] === undefined) {
    sessions[session] = [socket];
    session = sessions[session];
  } else {
    session.push(socket);
  }


  socket.on('disconnect', () => {
    session = session.filter((v) => v.id !== socket.id);
  });

  socket.on('offer', (offer) => {
    session.callee
      .map((calleeID) => sockets[calleeID])
      .forEach((calleeSocket) => {
        calleeSocket.emit('offer', offer);
      });
  });

  socket.on('answer', (answer) => {
    const callerSocket = sockets[session.caller];
    callerSocket.emit('answer', answer);
  });
});

// io.on("connection", (socket) => {
//   socket.on('offer', (offer) => {
//     io.emit('offer', offer);
//   });

//   socket.on('answer', (answer) => {
//     io.emit('answer', answer);
//   });

//   socket.on('caller-icecandidate', (icecandidate) => {
//     io.emit('caller-icecandidate', icecandidate);
//   });

//   socket.on('callee-icecandidate', (icecandidate) => {
//     io.emit('callee-icecandidate', icecandidate);
//   });
// });

httpServer.listen(8080);

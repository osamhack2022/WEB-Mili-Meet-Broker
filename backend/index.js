import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

io.on("connection", (socket) => {
  socket.on('offer', (offer) => {
    io.emit('offer', offer);
  });

  socket.on('answer', (answer) => {
    io.emit('answer', answer);
  });

  socket.on('caller-icecandidate', (icecandidate) => {
    io.emit('caller-icecandidate', icecandidate);
  });

  socket.on('callee-icecandidate', (icecandidate) => {
    io.emit('callee-icecandidate', icecandidate);
  });
});

httpServer.listen(8080);

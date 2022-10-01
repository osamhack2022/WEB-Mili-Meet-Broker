import { Server } from 'socket.io';

const io = new Server(8080);

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

const express = require('express');const http = require('http');const { Server } = require('socket.io');
const app = express();const server = http.createServer(app);const io = new Server(server, {    cors: {        origin: '*',        methods: ['GET', 'POST']    }});
const rooms = {};
io.on('connection', (socket) => {    socket.on('joinRoom', ({ roomId, username }) => {        socket.join(roomId);        if (!rooms[roomId]) {            rooms[roomId] = { users: [], code: '// Start coding here...' };        }        rooms[roomId].users.push(username);        socket.emit('codeUpdate', rooms[roomId].code);    });
socket.on('codeChange', ({ roomId, code }) => {
    if (rooms[roomId]) {
        rooms[roomId].code = code;
        socket.to(roomId).emit('codeUpdate', code);
    }
});

socket.on('disconnect', () => {
    // Clean up rooms if needed
});

});
server.listen(3000, () => {    console.log('Server running on port 3000');});
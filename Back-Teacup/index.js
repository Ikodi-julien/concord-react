require('dotenv').config();

const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http')

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const apiRouter = require('./app/router');

// // test connection db
// const db = require('./app/database');
// //

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use('/v1', apiRouter);

io.on('connection', socket => {
    socket.on('auth', ({ channelId, userId }) => {
        socket.join(`channel-${channelId}`);
        io.to(`channel-${channelId}`).emit('message', `User ${userId} entered`);
    })

    socket.on('message', ({ channelId, message }) => {
        io.to(`channel-${channelId}`).emit('message', message);
    })
})

httpServer.listen(PORT, () => console.log(`Serveur running on http://localhost:${PORT}`));
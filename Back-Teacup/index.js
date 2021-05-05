require('dotenv').config();

const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http')

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const apiRouter = require('./app/router');

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use('/v1', apiRouter);

io.on('connection', socket => {
    socket.on('auth', ({ channel/*, user*/ }) => {
        /*
        {
            user : {
                id : number,
                nickname : string
            }
            channel : {
                id : number
            }
        }
        */

        socket.join(`channel-${channel.id}`);

        // key 'user-join' to tell front to add user to user list
        // io.to(`channel-${message.channel.id}`).emit('user-join', {channel, user})
    })

    socket.on('message', message => {
        /*
        {
            user : {
                id : number,
                nickname : string
            }
            channel : {
                id : number
            },
            content : string
        }
        */
        io.to(`channel-${message.channel.id}`).emit('message', message);
    })

    // socket.on('disconnect', ({ channel, user }) => {
    //     // key 'user-join' to tell front to add user to user list
    //     io.to(`channel-${channel.id}`).emit('user-leave', {channel, user});
    // })
})

httpServer.listen(PORT, () => console.log(`Serveur running on http://localhost:${PORT}`));
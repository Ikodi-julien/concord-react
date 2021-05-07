require('dotenv').config();

const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http')

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer,   {
    cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ['Access-Control-Allow-Headers', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true
  }
});

const apiRouter = require('./app/router');
const cors = require('cors');

const PORT = process.env.PORT || 8000;

app.use(cors('*'));
app.use(express.json());

app.use('/v1', apiRouter);

let messageIndex = 0;

io.on('connection', socket => {
    socket.on('auth', ({ channel/*, user*/ }) => {
      console.log('channel :', channel);
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
      console.log('message :', message);
        /*
        {
            id : string (messageId) (have to be send)
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
        message.id = messageIndex++

        io.to(`channel-${message.channel.id}`).emit('message', message);
    })

    // socket.on('disconnect', ({ channel, user }) => {
    //     // key 'user-join' to tell front to add user to user list
    //     io.to(`channel-${channel.id}`).emit('user-leave', {channel, user});
    // })
})

httpServer.listen(PORT, () => console.log(`Serveur running on http://localhost:${PORT}`));
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


/*
auth => 
à recevoir
{
    user : {
        id : number,
        nickname : string
    }
    channel : {
        id : number
    }
}

message => 
à recevoir et renvoyer
{
    user : {
        id : number,
        nickname : string
    }
    channel : {
        id : number
    }
    content : string
}
*/

io.on('connection', socket => {
    socket.on('auth', ({ channel }) => {
        socket.join(`channel-${channel.id}`);
    })

    socket.on('message', message => {
        io.to(`channel-${message.channel.id}`).emit('message', message);
    })
})

httpServer.listen(PORT, () => console.log(`Serveur running on http://localhost:${PORT}`));
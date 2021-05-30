const socketHandler = {
    auth: socket => {
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
            // socket.emit('confirm')

            // key 'user-join' to tell front to add user to user list
            // io.to(`channel-${message.channel.id}`).emit('user-join', {channel, user})
            // Channel.addUser(User.findByPk(user.id))
        })
    },

    message: (io, socket, messageIndex) => {
        socket.on('message', message => {
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
    },

    // socket.on('disconnect', ({ channel, user }) => {
    //     // key 'user-join' to tell front to add user to user list
    //     io.to(`channel-${channel.id}`).emit('user-leave', {channel, user});
    // })
};

module.exports = socketHandler;
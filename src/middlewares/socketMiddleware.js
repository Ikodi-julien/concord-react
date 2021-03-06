/* eslint-disable no-case-declarations */
import { BASE_URL } from 'src/settings';
import {
  CHANNEL_FORM_SUBMIT,
  FETCH_CHANNEL,
  FETCH_CHANNEL_SUCCESS,
  CONNECT_TO_SOCKET,
  USER_LEAVE_CHANNEL,
  connectToSocket,
  messageReceived,
  userLeaveChannel,
  socketJoinConfirm,
  updateChannelUsers,
} from '../actions/channelActions';

let socket;

export default (store) => (next) => (action) => {
  const { channel, user } = store.getState();

  switch (action.type) {
    case FETCH_CHANNEL:
      next(action);
      // If we were already in a channel, that is a click on a channel link
      // from Channel, we need to tell the socket that we leave.
      // Else socket is undefined, so...
      if (socket) {
        store.dispatch(userLeaveChannel());
      }
      break;

    case FETCH_CHANNEL_SUCCESS:
      // Channel data are going to the store
      next(action);
      // console.log(action);
      // Next, we need to connect to socket in this channel
      store.dispatch(connectToSocket());
      break;

    case CONNECT_TO_SOCKET:
      next(action);
      // connect to socket
      socket = window.io(BASE_URL);
      // auth to inform server
      socket.emit('auth', { user, channel });
      // make listeners
      socket.on('message', (messageDuServeur) => {
        // console.log('message reçu', messageDuServeur);
        store.dispatch(messageReceived(messageDuServeur));
      });

      socket.on('user:join', (data) => {
        // This is when a user joins the active channel
        // console.log('user:join', data);
        store.dispatch(updateChannelUsers(channel.id));
      });

      socket.on('user:leave', (data) => {
        // This is when a user leaves the active channel
        // console.log('user-leave', data);
        store.dispatch(updateChannelUsers(channel.id));
      });

      socket.on('confirm', () => {
        // console.log('confirm');
        store.dispatch(socketJoinConfirm());
        store.dispatch(updateChannelUsers(channel.id));
      });

      socket.on('error', () => {
        // TODO gérer l'erreur
        throw Error('erreur dans socketMW');
      });

      break;

    case CHANNEL_FORM_SUBMIT:
      // console.log(action);
      if (!store.getState().channel.quillContent) return;
      // Récupérer dans le state le texte du message
      // fabriquer un objet de message qui contient
      const message = {
        channel: {
          id: channel.id,
        },
        user: {
          id: user.id,
          nickname: user.nickname,
          avatar: user.avatar,
        },
        content: channel.quillContent,
      };

      // le texte et l'auteur (pas d'id)
      // J'envoie ce message au serveur de webSocket
      socket.emit('message', message);
      // console.log('emit message', message);
      next(action);
      break;

    case USER_LEAVE_CHANNEL:
      next(action);
      // console.log('user-leave', { user, channel });

      if (socket) {
        socket.emit('user-leave', { user, channel });
        socket.close();
      }

      break;

    default:
      next(action);
  }
};

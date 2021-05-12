/* eslint-disable no-case-declarations */
import { WS_URL } from 'src/vars';
import {
  CHANNEL_FORM_SUBMIT,
  FETCH_CHANNEL_SUCCESS,
  messageReceived,
} from '../actions/channelActions';

let socket;

export default (store) => (next) => (action) => {
  const { channel, user } = store.getState();

  switch (action.type) {
    case FETCH_CHANNEL_SUCCESS:
      // L'API a bien renvoyé les infos du channel dispo en BDD
      next(action);
      console.log(action);

      // On envoi les infos d'authentification
      // connexion au serveur de socket
      socket = window.io(WS_URL);
      // On envoie les infos d'authentification
      socket.emit('auth', { user, channel });

      // Ecoute des messages en provenance du serveur.
      socket.on('message', (messageDuServeur) => {
        console.log('message reçu', messageDuServeur);
        // A chaque message reçu on met à jour le state, via le reducer
        const actionToDispatch = messageReceived(messageDuServeur);
        store.dispatch(actionToDispatch);
      });

      socket.on('user-join', (data) => {
        console.log('user-join', data);
      });
      break;

    case CHANNEL_FORM_SUBMIT:

      console.log(action);
      // Récupérer dans le state le texte du message
      // fabriquer un objet de message qui contient
      const message = {
        channel: {
          id: channel.id,
        },
        user: {
          id: user.id,
          nickname: user.nickname,
        },
        content: channel.inputForm,
      };

      // le texte et l'auteur (pas d'id)
      // J'envoie ce message au serveur de webSocket
      socket.emit('message', message);
      console.log('emit message', message);
      next(action);
      break;

    default:
      next(action);
  }
};

import { 
  CHANNEL_FORM_SUBMIT, 
  FETCH_CHANNEL_SUCCESS,
  messageReceived
} from '../actions/channelActions';

let socket;

export default (store) => (next) => (action) => {
  switch (action.type) {
    
    case FETCH_CHANNEL_SUCCESS:
      // L'API a bien renvoyé les infos du channel dispo en BDD
      next(action);
      console.log(action);
      // JE crée une connexion au serveur de socket
      socket = window.io('http://localhost:3001');
      // J'écoute les messages venant du serveur.
      socket.on('message', (messageDuServeur) => {
        console.log('message reçu dans socketMW ', messageDuServeur);
        // A chaque message reçu on met à jour le state, via le reducer
        const actionToDispatch = messageReceived(messageDuServeur);
        store.dispatch(actionToDispatch);
      });
      
      break;
    
    case CHANNEL_FORM_SUBMIT:
      console.log(action)
      // Récupérer dans le state le texte du message
      const { channel, user } = store.getState();
      // fabriquer un objet de message qui contient
      const message = {
        pseudo: user.pseudo,
        message: channel.inputForm,
      };
      console.log('msg dans socketMW', message);
      // le texte et l'auteur (pas d'id)
      // J'envoie ce message au serveur de webSocket
      socket.emit('message', message);
      next(action);

      break;

    default:
      next(action);
  }
};

import {
  CHANNEL_INPUT_CHANGE,
  FETCH_CHANNEL,
  FETCH_CHANNEL_ERROR
} from 'src/actions/channelActions.js';
import { FETCH_CHANNEL_SUCCESS } from '../actions/channelActions';

export const initialState = {
  id: 5246,
  channelTitle: 'Le channel de test',
  messages: [
    {id: 1, userName:"Bernard", content: "Tu la connais celle des deux poissons rouge dans un bocal ?"},
    {id: 2, userName:"Bianca", content: "Non, raconte !"},
    {id: 3, userName:"Belle", content: "Moi je la connais"},
    {id: 4, userName:"Sébastien", content: "Ouais, ben ils sont en train de tourner et puis d'un seul coup, y'en a un qui dit à l'autre \"J'arrive pas à croire qu'on est déjà jeudi\""},
  ],
  users: [
    {id: 1, name:"Bernard", avatar: "(_;_)", isConnected: true},
    {id: 2, name:"Bianca", avatar: ";o)", isConnected: true},
    {id: 3, name:"Belle", avatar: ":-/", isConnected: false},
    {id: 4, name:"Sébastien", avatar: "o.0", isConnected: false},
  ],
  myChannelLinks: [
    {id: 1, slug: 'filmsdhorreur', name:"Films d'horreur"},
    {id: 2, slug: 'cuisine', name:"Cuisine méditéranéenne"},
  ],
  inputForm: 'Je suis le contenu du formulaire',
  isLoading: false,
  error: false
};


const reducer = (stateActuel = initialState, action = {}) => {

  switch (action.type) {
    
    case FETCH_CHANNEL:
      console.log('action ds reducer: ', action);
      
      return {
        ...stateActuel,
        isLoading: true
      }
    
    case FETCH_CHANNEL_SUCCESS:
      console.log('FETCH_SUCCESS ds reducer: ', action);
    
      return {
        ...stateActuel,
        ...action.channel
      }
      
    case FETCH_CHANNEL_ERROR:
      console.log('FETCH_ERROR ds reducer: ', action);

      return {
        ...stateActuel,
        isLoading: false
      }
      
    case CHANNEL_INPUT_CHANGE:
      console.log(action);
      
      return {
        ...stateActuel,
        [action.name]: action.value
      }
    
      default:
        return {
          ...stateActuel
        };
  }
}

export default reducer;

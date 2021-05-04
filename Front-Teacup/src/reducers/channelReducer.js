import {
  CHANNEL_INPUT_CHANGE
} from 'src/actions/channelActions.js';

export const initialState = {
  channelId: 5246,
  
  channelTitle: 'Le channel de test',
  
  messages: [
    {id: 1, userName:"Bernard", content: "Tu la connais celle des deux poissons rouge dans un bocal ?"},
    {id: 2, userName:"Bianca", content: "Non, raconte !"},
    {id: 3, userName:"Belle", content: "Moi je la connais"},
    {id: 4, userName:"Sébastien", content: "Ouais, y'en a un qui dit à l'autre \"J'arrive pas à croire qu'on est déjà jeudi\""},
  ],
  
  users: [
    {id: 1, name:"Bernard", avatar: "(_;_)"},
    {id: 2, name:"Bianca", avatar: ";o)"},
    {id: 3, name:"Belle", avatar: ":-/"},
    {id: 4, name:"Sébastien", avatar: "o.0"},
  ],
    
  myChannelLinks: [
    {id: 1, slug: 'horror_movie', name:"Films d'horreur"},
    {id: 2, slug: 'cook', name:"Cuisine méditéranéenne"},
  ],
  
  inputForm: 'test'
};


const reducer = (stateActuel = initialState, action = {}) => {

  switch (action.type) {
    
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

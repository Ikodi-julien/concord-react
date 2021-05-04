import axios from 'axios';
import {
  FETCH_CHANNEL, 
  fetchChannelError,
  fetchChannelSuccess
} from '../actions/channelActions';

export default (store) => (next) => (action) => {
  
  switch(action.type) {
    case FETCH_CHANNEL:
      console.log('Il y a eu une action FETCH_CHANNEL');
      next(action);
      
      console.log('action ds MW: ', action);
      
      axios({
        url: `http://localhost:3001/${action.route}`, 
        method: 'GET'
      })
      .then(res => {
        console.log('res.data :',res.data);
        store.dispatch(fetchChannelSuccess(res.data))
      })
      .catch(error => {
        console.log('catch error: ', error);
        store.dispatch(fetchChannelError());
      })
      break

      default:
      next(action)
  }
}

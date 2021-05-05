import { combineReducers } from 'redux';

import appReducer from './appreducer';
import channelReducer from './channelReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
   
      app:appReducer,
      channel: channelReducer,
      auth: authReducer
});

export default rootReducer;

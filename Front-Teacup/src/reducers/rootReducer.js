import { combineReducers } from 'redux';

import appReducer from './appreducer'
import channelReducer from './channelReducer';

const rootReducer = combineReducers({
   
      app:appReducer,
      channel: channelReducer
    
});

export default rootReducer;

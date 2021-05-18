import { combineReducers } from 'redux';

import appReducer from './appreducer';
import channelReducer from './channelReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({

  app: appReducer,
  channel: channelReducer,
  user: userReducer,
});

export default rootReducer;

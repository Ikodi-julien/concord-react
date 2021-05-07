import { combineReducers } from 'redux';

import appReducer from './appreducer';
import channelReducer from './channelReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({

  app: appReducer,
  channel: channelReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;

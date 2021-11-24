import { combineReducers } from 'redux';

import appReducer from './appreducer';
import channelReducer from './channelReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({

  app: appReducer,
  channel: channelReducer,
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;

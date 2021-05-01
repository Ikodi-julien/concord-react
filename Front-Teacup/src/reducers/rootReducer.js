import { combineReducers } from 'redux';

import appReducer from './appreducer'

const rootReducer = combineReducers({
   

      app:appReducer,

    
});

export default rootReducer;

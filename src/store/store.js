import { createStore, applyMiddleware, compose } from 'redux';
import ajaxMW from 'src/middlewares/ajaxMiddleware';
import socketMiddleware from 'src/middlewares/socketMiddleware';
import rootReducer from 'src/reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(socketMiddleware, ajaxMW),
);

const store = createStore(rootReducer, enhancers);

export default store;

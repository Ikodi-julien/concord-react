import { createStore, applyMiddleware, compose } from 'redux';
import ajaxMW from 'src/middlewares/ajaxMiddleware';
import socketMiddleware from 'src/middlewares/socketMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import rootReducer from 'src/reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, socketMiddleware, ajaxMW),
);

const store = createStore(rootReducer, enhancers);

export default store;

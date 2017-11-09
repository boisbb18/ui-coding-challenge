import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer/reducer.js';

const logger = createLogger({});
const middleware = applyMiddleware(promise(), thunk, logger);

export default createStore(
  reducer,
  middleware
);

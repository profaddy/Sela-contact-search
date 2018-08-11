import { applyMiddleware, createStore } from "redux"
import combineReducers from "./Reducers"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

//import reducer from "./reducers"

const store = createStore(
   combineReducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const middleware = applyMiddleware(thunk, logger)

export default createStore(combineReducers,middleware)
//export default createStore(middleware)


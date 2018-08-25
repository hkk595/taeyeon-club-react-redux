import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/RootReducer'
import postData from '../data/post'

const loggerMiddleware = createLogger();

const initialState = {
  posts: postData
};

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware, // let us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  );
}

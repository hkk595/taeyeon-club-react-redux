import { combineReducers } from 'redux'
import likeReducer from './likeReducer'

const rootReducer = combineReducers(likeReducer);

export default rootReducer

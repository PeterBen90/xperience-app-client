import { combineReducers } from 'redux';
import user from './user';
import experienceReducer from './experienceReducer'

const rootReducer = combineReducers({
  user,
  experienceReducer
})

export default rootReducer;
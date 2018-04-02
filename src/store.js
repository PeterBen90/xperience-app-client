import { createStore } from 'redux';
import experienceReducer from './reducers';

const store = createStore(experienceReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;

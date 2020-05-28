import  { createStore } from 'redux'
// import  thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers'

// const middleware =[thunk];
const initialState={};

const store = createStore(rootReducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    export default store;
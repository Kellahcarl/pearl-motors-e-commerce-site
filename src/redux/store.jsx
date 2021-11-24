import {createStore} from 'redux'
import DisplayReducer from './reducers/DisplayReducer'

const store = createStore(DisplayReducer,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;

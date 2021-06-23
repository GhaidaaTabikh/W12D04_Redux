import {createStore, combineReducers} from 'redux'

import tokenReducer from "./login"
import articleReducer from "./article"

const reducers = combineReducers({
    tokenReducer,
    articleReducer
})

const store = createStore(reducers)

export default store
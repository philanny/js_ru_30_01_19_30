import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectOptions from './selectOptions'

export default combineReducers({
    count: counterReducer,
    articles,
    selectOptions
})
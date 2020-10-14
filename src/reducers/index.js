import {combineReducers} from 'redux'
import formreducers from './formreducers'

export default combineReducers({
    user:formreducers
})
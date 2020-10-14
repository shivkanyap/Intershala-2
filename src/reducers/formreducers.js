import {FETCH_USER} from '../actions/types'
const initialState={
    form:{

    }
}
export default function(state=initialState,action){
    switch(action.type){
        case FETCH_USER:
            return {
                ...state,
                form:action.payload
            }
            default:
                return state
    }
}

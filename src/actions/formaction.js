import {FETCH_USER} from './types'
export const fetchUser=(formData)=>dispatch=>{
    dispatch({
        type:FETCH_USER,
        payload:formData
    })
}
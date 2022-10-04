import {LOADING_API,ERROR_API,SUCCESS_API} from './types'
export const API_ACTION = {
    LOADING_API,
    SUCCESS_API,
    ERROR_API
}
export function loadingAPIAction(){
    return {
        type:LOADING_API
    }
}

export function completeAPIAction (payload){
    return{
        type:SUCCESS_API,
        payload:payload
    }
}

export function errorAPIAction(error){
return {
    type:ERROR_API,
    payload:error
}
}
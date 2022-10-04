import { API_ACTION } from "../action/action";

const useReducer = (data = {
    'loading':false,
    'data' : {},
    'erromsg':""
}, action)=>{
if(action.type === API_ACTION.LOADING_API){
    data={
        ...data,
        'loading':true
    }
}else if(action.type === API_ACTION.SUCCESS_API){
    data = Object.assign({},data,{
        data:action.payload,
        loading:false
    })
}else if (action.type === API_ACTION.ERROR_API){
    data={
        'loading':false,
        'data':{},
        'erromsg':action.payload
    }
}
return data
}

export default useReducer;
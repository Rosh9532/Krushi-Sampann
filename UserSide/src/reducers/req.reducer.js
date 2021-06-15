import { reqConstants } from "../actions/constants";

const initState={
    req:[],
    loading:false
}

export default (state=initState,action)=>{
    switch(action.type){
        case reqConstants.GET_ALL_REQ_SUCCESS:
            state={
                ...state,
                req:action.payload.req
            }
            break;
    }
    console.log(state);
    return state;
    
} 
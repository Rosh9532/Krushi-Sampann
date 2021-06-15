import { reqPostConstants } from "../actions/constants";

const initState={
    reqPost : [],
    loading: false
}

export default (state=initState,action)=>{
    switch(action.type){
        case reqPostConstants.GET_ALL_REQ_SUCCESS:
            state={
                ...state,
                reqPost:action.payload.product
            }
            break;
    }
    return state;
} 
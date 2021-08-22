import { userconstants } from "../actions/constants"

const initState={
    error:null,
    message:'',
    loading:false,
    authenticate:false
}

export default(state=initState,action)=>{
    switch(action.type){
        case userconstants.USER_REGISTER_REQUEST:
            state={
                ...state,
                loading:true,
                authenticate:false
            }
            break;
        case userconstants.USER_REGISTER_SUCCESS:   
            state={
            ...state,
            loading:false,
            authenticate:true,
            message:action.payload.message
            }
        break;
        case userconstants.USER_REGISTER_FAILURE:   
            state={
            ...state,
            loading:false,
            authenticate:false,
            message:action.payload.error
            }   
        break;
    }
    return state;
}
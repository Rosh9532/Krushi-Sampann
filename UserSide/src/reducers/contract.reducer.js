import { contractConstants } from "../actions/constants";

const initState={
    contracts:[],
    loading:false
}

export default (state=initState,action)=>{
    switch(action.type){
        case contractConstants.GET_ALL_CONTRACTS_SUCCESS:
            state={
                ...state,
                contracts:action.payload.contracts 
            }
            break;
    }
    console.log(state);
    return state;
    
} 
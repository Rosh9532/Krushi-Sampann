import { productConstants } from "../actions/constants";

const initState={
    products:[],
    loading:false
}

export default (state=initState,action)=>{
    switch(action.type){
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state={
                ...state,
                products:action.payload.products
            }
            break;
    }
    return state;
} 
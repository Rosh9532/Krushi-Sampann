import { categoryConstants } from "../actions/constants"

const initState = {
    error: null,
    categories: [],
    loading: false
}

export default(state = initState, action)=>{
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories:action.payload.categories
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
            state = {
                ...state,
                loading: false,
                message:action.payload.error
            }
            break;

    }
    console.log(state)
    return state;

}
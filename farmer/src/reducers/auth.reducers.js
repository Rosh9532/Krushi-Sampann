import { authConstants } from "../actions/constants";

const initState = {
    token: null,
    user: {
        firstName: "",
        lastName: "",
        email: "",
        role:"farmer",
        username :"",
        address:"",
        city:"",
        district:"",
         postalCode:"",
        AadharNo:""
    },
    // authenticate: localStorage.getItem('token')?(localStorage.getItem('user')?true:false):false,
    authenticate:false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
};

export default (state = initState, action) => {
    console.log(action);

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
            };
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                
                token: action.payload.token,
                user: action.payload.user,
                authenticate: true,
                authenticating: false,
            };
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState,
            };
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case authConstants.SIGNUP_REQUEST:
            break;
        case authConstants.SIGNUP_SUCCESS:
            break;
        case authConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
            };
            break;
    }
   console.log(state)
    return state;
};





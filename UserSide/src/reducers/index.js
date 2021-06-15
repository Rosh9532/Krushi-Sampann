import categoryReducer from './category.reducer';
import authReducer from './auth.reducers';
import userReducer from './user.reducers';
import productReducer from './product.reducers'
import contractReducer from './contract.reducer'
import reqReducer from './req.reducer'
import {combineReducers} from "redux";

const rootReducer=combineReducers({
    category:categoryReducer ,
    auth:authReducer,
    user:userReducer,
    product:productReducer,
    contracts:contractReducer,
    req:reqReducer
});

export default rootReducer;
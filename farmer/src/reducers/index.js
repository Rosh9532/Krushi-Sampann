import authReducer from './auth.reducers';
import {combineReducers} from 'redux'
import userReducer from './user.reducers';
import categoryReducer from "./category.reducers";
import productReducer from './product.reducers';
import contractReducer from './contract.reducer';
import reqPostReducer from './reqPost.reducers'
const rootReducer = combineReducers(
    {
       auth:authReducer,
       user:userReducer,
       category:categoryReducer,
       product:productReducer,
       contracts:contractReducer ,
       reqPost:reqPostReducer
    }
);

export default rootReducer;
import axios from "../helpers/axios"
import { categoryConstants,productConstants } from "./constants";

export const getInitialData=()=>{
    return async (dispatch)=>{
        
        const res=await axios.post('/intdata');
        if(res.status===200){
            const{categories,products}=res.data;
            console.log(products)
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload:{categories}
            });
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload:{products}
            });
            
        }
        
    }
}
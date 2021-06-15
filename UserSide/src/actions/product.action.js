import axios from "../helpers/axios"
import { productConstants } from "./constants";


export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            res = await axios.get(`/product/${productId}`);
            console.log(res);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });

        } catch(error) {
            console.log(error);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            });
        }

    }
}

export const getProductBySlug=(slug)=>{
    return async (dispatch)=>{
        const res=await axios.get(`/products/${slug}`);
        console.log("roshni")
        console.log(res.data);
        if(res.status===200){
           dispatch({
               type:productConstants.GET_PRODUCTS_BY_SLUG,
               payload:res.data
           }

           )
        }
    }
}






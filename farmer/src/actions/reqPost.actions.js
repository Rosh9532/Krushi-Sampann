import { reqPostConstants } from './constants'
import axios from "../helpers/axios"

const getReqPost = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: reqPostConstants.GET_ALL_REQ_REQUEST });
            const res = await axios.get(`/buyer/getprorequirement`);
            if (res.status === 200) {
                const { product } = res.data;
                console.log(product)
                dispatch({
                    type: reqPostConstants.GET_ALL_REQ_SUCCESS,
                    payload: { product } 
                     
                });
            } else {
                dispatch({ type: reqPostConstants.GET_ALL_REQ_FAILURE })
            }
        } catch (error) {
            console.log(error);
                }
    } 
}

export {getReqPost }
import axios from "../helpers/axios"
import { categoryConstants } from "./constants";

 const getAllCategory = () => {
    return async (dispatch) => {
        dispatch({
            type: categoryConstants.GET_ALL_CATEGORIES_REQUEST
        })
        const res = await axios.get('/category/getcategory');
        console.log(res);
        if (res.status === 201) {
            const { categorylist } = res.data;
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categorylist }
            })
        } else {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }

}

export const addCategory = (form) => {
    return async (dispatch) => {
        dispatch({
            type: categoryConstants.ADD_NEW_CATEGORY_REQUEST
        })
        try {
            const res = await axios.post('/category/create', form);
            if (res.status === 201) {
                dispatch({
                    type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
                    payload: { category: res.data.category }
                })
                dispatch(getAllCategory())
            } else {
                dispatch({
                    type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
                    payload: res.data.error
                })
            }
            //console.log(res)
        } catch (error) {
            console.log(error.response);
            console.log(error)
        }
    }
}

export {
    getAllCategory
}
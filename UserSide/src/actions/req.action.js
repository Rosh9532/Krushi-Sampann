import axios from "../helpers/axios"
import { reqConstants } from "./constants";

export const addReq = (form) => {
    return async (dispatch) => {
      try {
        dispatch({ type: reqConstants.ADD_REQ_REQUEST });
        const res = await axios.post(`/create/`, form);
        if (res.status === 201) {
          dispatch({ type: reqConstants.ADD_REQ_SUCCESS })

        } else {
          dispatch({ type: reqConstants.ADD_REQ_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };



export const getReq = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: reqConstants.GET_ALL_REQ_REQUEST });
            const res = await axios.get(`/`);
            console.log(res);
            if (res.status == 200) {
                const {req } = res.data;            
            dispatch({
                type: reqConstants.GET_ALL_REQ_SUCCESS,
                payload: { req },
            });
            }else {dispatch({type:reqConstants.GET_ALL_REQ_FAILURE})}

        } catch (error) {
            console.log(error);
        }
    };
};


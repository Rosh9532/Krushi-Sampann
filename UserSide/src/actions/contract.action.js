import axios from "../helpers/axios"
import { contractConstants } from "./constants";

export const getContracts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: contractConstants.GET_ALL_CONTRACTS_REQUEST });
            const res = await axios.get(`/contract/getContracts`);
            console.log("contract action res");
            console.log(res);
            if (res.status == 200) {
                const {contracts } = res.data;            
            dispatch({
                type: contractConstants.GET_ALL_CONTRACTS_SUCCESS,
                payload: { contracts },
            });
            }else {dispatch({type:contractConstants.GET_ALL_CONTRACTS_FAILURE})}

        } catch (error) {
            console.log(error);
        }
    };
};

export const addContract = (form) => {
    return async (dispatch) => {
      try {
        dispatch({ type: contractConstants.ADD_CONTRACTS_REQUEST });
        const res = await axios.post(`/create/bcontract`, form);
        if (res.status === 201) {
          dispatch({ type: contractConstants.ADD_CONTRACTS_SUCCESS })

        } else {
          dispatch({ type: contractConstants.ADD_CONTRACTS_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };


  
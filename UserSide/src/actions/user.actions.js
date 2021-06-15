import axios from "../helpers/axios"
import { userconstants } from "./constants"

export const signup=(user)=>{
    console.log(user)
    return async (dispatch)=>{
        dispatch({type:userconstants.USER_REGISTER_REQUEST});
         const res=await axios.post('/buyerSignup',{
             ...user
         }) 
         if(res.status===201){
             const{message}=res.data;
             
             dispatch({
                 type:userconstants.USER_REGISTER_SUCCESS,
                 payload:{
                     message
                 }
             });
         }else{
             if(res.status===400){
                 dispatch({
                     type:userconstants.USER_REGISTER_FAILURE,
                     payload:{error:res.data.error}
                 })
             }
         }       

        //   dispatch({type:authconstants.LOGIN_REQUEST,
        //   payload:{
        //       ...user
        //   }
        // })
    }
}
import axios from 'axios';
import { useState } from 'react';
import { api } from '../urlConfig';
import store from '../store'
import { authConstants } from '../actions/constants';
import PopUp from '../components/Toast';
const token=window.localStorage.getItem('token');
const axiosInstance=axios.create({
    baseURL:api,
    headers:{
        'Authorization':token ? `Bearer ${token}`:''
    }                         //takes an object
});

axiosInstance.interceptors.request.use((req)=>{
    const {auth}=store.getState();
    if(auth.token){
        req.headers.Authorization=`Bearer ${auth.token}`;
    }
    return req;
})
axiosInstance.interceptors.response.use((res)=>{
    return res;
},(error)=>{
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if(status && status === 500){
        // <PopUp title="Error" message="There is an Error while proceeding your request"/>
        alert("There is an Error while proceeding your request ");
    }
    return Promise.reject(error)
})


export default axiosInstance;
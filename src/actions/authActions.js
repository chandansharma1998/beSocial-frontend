import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:5050"})

export const login = (formdata) => async(dispatch) =>{
    dispatch({type:"AUTH_START"})
    try {
        const {data} = await API.post('/auth/login',formdata)
        dispatch({type:"AUTH_SUCCESS",data})
        
    } catch (err) {
        console.log(err);
        dispatch({type:"AUTH_FAIL"})
    }
}

export const signup = (formdata) => async(dispatch) =>{
    dispatch({type:"AUTH_START"})
    try {
        const {data} = await API.post('/auth/register',formdata)
        dispatch({type:"AUTH_SUCCESS",data})
        
    } catch (err) {
        console.log(err);
        dispatch({type:"AUTH_FAIL"})
    }
}

export const logout = () => async(dispatch) =>{
    dispatch({type:"LOGOUT"})
}
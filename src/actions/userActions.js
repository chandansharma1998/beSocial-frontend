import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:5050"})

export const updateUser = (id, userData) => async(dispatch) =>{
    dispatch({type:"UPDATE_START"})
    try {
        const {data} = await API.put(`/user/${id}`,userData)
        dispatch({type:"UPDATE_SUCCESS",data})
    } catch (err) {
        console.log(err);
        dispatch({type:"UPDATE_FAIL"})
    }
}

export const followUser = (id, user) =>async(dispatch)=>{
    try {
        API.put(`/user/${id}/follow`,user)
        dispatch({type:"FOLLOW_USER",id})
    } catch (err) {
        console.log(err);
    }
}

export const unfollowUser = (id, user) =>async(dispatch)=>{
    try {
        API.put(`/user/${id}/unfollow`,user)
        dispatch({type:"UNFOLLOW_USER",id})
    } catch (err) {
        console.log(err);
    }
}
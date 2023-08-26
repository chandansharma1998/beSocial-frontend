import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:5050"})

export const uploadImg = (formdata) => async(dispatch)=>{
    try {
        await API.post('/upload',formdata)
    } catch (err) {
        console.log(err);
    }
}

export const uploadPost = (postData) => async(dispatch) =>{
    dispatch({type:"UPLOAD_START"})
    try {
        const {data} = await API.post('/post',postData)
        dispatch({type:"UPLOAD_SUCCESS",newPost:data.post})
    } catch (err) {
        console.log(err);
        dispatch({type:"UPLOAD_FAIL"})
    }
}
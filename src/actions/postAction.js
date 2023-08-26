import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:5050"})

export const getTimelinePosts = id => async(dispatch) => {
    dispatch({type:"FETCHING_START"})
    try {
        const {data} = await API.get(`post/${id}/timeline`)
        dispatch({type:"FETCHING_SUCCESS", data})
    } catch (err) {
        console.log(err);
        dispatch({type:"FETCHING_FAIL"})
    }
}
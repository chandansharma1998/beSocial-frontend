import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:5050"})

export const likePost = (id,userId) => API.put(`post/${id}/like`, {userId:userId})


export const getUser = (id) => API.get(`/user/${id}`)

export const getAllPersons = ()  => API.get('/user')
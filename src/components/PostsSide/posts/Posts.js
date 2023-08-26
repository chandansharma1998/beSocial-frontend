import React,{useEffect} from 'react'
import Post from '../post/Post'
import './posts.css'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getTimelinePosts } from '../../../actions/postAction'


const Posts = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.authReducer.authData)
  let {posts,uploading} = useSelector(state => state.postReducer)
  const params = useParams()

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])
  

  
  if(!posts){
    return "Create Your First Post"
  }
  if(params.id){
    posts = posts.filter(post => post.userId === params.id)
  }
  return (
    <div className='posts'>
        {uploading ? "Fetching Posts...":posts.map((data,i)=>{
            return (
                <Post data={data} id={i}/>
            )
        })}
    </div>
  )
}

export default Posts
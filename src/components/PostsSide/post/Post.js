import React,{useState} from 'react'
import './post.css'
import comment from '../../../img/comment.png'
import share from '../../../img/share.png'
import heart from '../../../img/like.png'
import notLike from '../../../img/notlike.png'
import { useSelector } from 'react-redux'
import {likePost} from '../../../api/requests'

const Post = ({data}) => {
  const {user} = useSelector(state => state.authReducer.authData)

  const [liked,setLiked] = useState(()=>data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = () =>{
    setLiked(prev => !prev)
    likePost(data._id, user._id);
    liked ? setLikes(prev=>prev - 1): setLikes(prev => prev + 1)
  }

  return (
    <div className='post'>
        <img src={data.image?process.env.REACT_APP_PUBLIC_FOLDER + data.image:""} alt=''/>
        <div className='post-reaction'>
            <img src={liked ? heart:notLike} alt='' style={{cursor:"pointer"}} onClick={handleLike}/>
            <img src={comment} alt=''/>
            <img src={share} alt=''/>
        </div>
        <span style={{color:'var(--gray)',fontSize:'15px'}}>{likes} Likes</span>
        <div className='detail'>
            <span><b>{data.firstname} {data.lastname} </b></span>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post
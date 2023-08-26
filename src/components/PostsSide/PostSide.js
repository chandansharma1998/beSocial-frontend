import React from 'react'
import Posts from './posts/Posts'
import './postside.css'
import PostsShare from './postsShare/PostsShare'

const PostSide = () => {
  return (
    <div className='postside'>
        <PostsShare/>
        <Posts/>
    </div>
  )
}

export default PostSide
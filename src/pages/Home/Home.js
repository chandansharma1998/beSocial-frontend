import React from 'react'
import PostSide from '../../components/PostsSide/PostSide'
import Profile from '../../components/ProfileSide/Profile'
import RightSide from '../../components/RightSide/RightSide'
import './home.css'
const Home = () => {
  return (
    <div className='home'>
        <Profile/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home
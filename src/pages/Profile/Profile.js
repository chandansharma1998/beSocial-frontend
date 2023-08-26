import React from 'react'
import PostSide from '../../components/PostsSide/PostSide'
import ProfileLeft from '../../components/ProfilePageLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileSide/profileCard/ProfileCard'
import RightSide from '../../components/RightSide/RightSide'
import './profile.css'

const Profile = () => {
  return (
    <div className='profile-page'>
      <ProfileLeft/>
      <div className='profile-center'>
        <ProfileCard location="profilePage"/>
        <PostSide/>
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile
import React from 'react'
import LogoSearch from './logoSearch/LogoSearch'
import ProfileCard from './profileCard/ProfileCard'
import './profileSide.css'
import FollowersCard from './followersCard/FollowersCard'


const Profile = () => {
  return (
    <div className='profile'>
        <LogoSearch/>
        <ProfileCard location="homePage"/>
        <FollowersCard/>
    </div>
  )
}

export default Profile
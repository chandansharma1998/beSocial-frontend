import React from 'react'
import FollowersCard from '../ProfileSide/followersCard/FollowersCard'
import LogoSearch from '../ProfileSide/logoSearch/LogoSearch'
import InfoCard from './InfoCard/InfoCard'
import './profileleft.css'

const ProfileLeft = () => {
  return (
    <div className='profileleft'>
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
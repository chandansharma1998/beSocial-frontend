import React from 'react'
import './profilecard.css'
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"

const ProfileCard = ({location}) => {

  const {user} = useSelector(state => state.authReducer.authData)
  const {posts} = useSelector(state => state.postReducer)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className='profilecard'>
        <div className='profile-images'>
            <img src={user.coverPicture ? serverPublic+user.coverPicture : serverPublic+"cover.jpg"} alt=''/>
            <img src={user.profilePicture ? serverPublic+user.profilePicture : serverPublic+"default.png"} alt=''/>
        </div>
        <div className='profile-name'>
          <span>{user.firstname} {user.lastname}</span>
          <span>{user.worksAt}</span>
        </div>

        <div className='follow-status'>
          <hr/>
            <div>
              <div className='follow'>
                <span>{user.followings.length}</span>
                <span>Following</span>
              </div>

              <div className='vl'></div>
    
              <div className='follow'>
                <span>{user.followers.length}</span>
                <span>Followers</span>
              </div>

              {
                location === "profilePage" && (
                  <>
                    <div className='vl'></div>
                    <div className='follow'>
                      <span>{posts.filter(post => post.userId === user._id).length}</span>
                      <span>Posts</span>
                    </div>
                  </>
                )
              }
            </div>
          <hr/>
        </div>
        {
          location ==="homePage" && (
          <span>
            <Link to={`/profile/${user._id}`} style={{textDecoration:"none", color:"inherit"}}>
              My Profile
            </Link>
          </span>)
        }
        
    </div>
  )
}

export default ProfileCard
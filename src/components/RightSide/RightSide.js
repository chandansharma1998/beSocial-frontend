import React,{useState} from 'react'
import './rightside.css'
import home from '../../img/home.png'
import notification from '../../img/noti.png'
import comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from './trendCard/TrendCard'
import PostShareModal from '../PostShareModal/PostShareModal'
import ProfileCard from '../ProfileSide/profileCard/ProfileCard'
import {Link} from 'react-router-dom'

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='rightside'>
        <div className='nav-icons'>
            <Link to = '../home'>
              <img src={home} alt=''/>
            </Link>
            <UilSetting/>
            <img src={notification} alt=''/>
            <img src={comment} alt=''/>
        </div>
        <TrendCard/>
        
        <button className='button r-button' onClick={()=>setModalOpened(true)}>
          Share
        </button>
        <PostShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide
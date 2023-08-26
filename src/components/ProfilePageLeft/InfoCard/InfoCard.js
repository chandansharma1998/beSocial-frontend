import React,{useEffect, useState} from 'react'
import './infocard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../../profile-edit-modal/ProfileModal';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from '../../../api/requests';
import { logout } from '../../../actions/authActions';



const InfoCard = () => {
    const {user} = useSelector(state => state.authReducer.authData)
    const params = useParams()
    const dispatch = useDispatch()
    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const [modalOpened, setModalOpened] = useState(false);

    const handleLogout = () =>{
        dispatch(logout())
    }
    useEffect(()=>{
        const fetchProfileUser = async(profileUserId) =>{
            if(profileUserId === user._id){
                setProfileUser(user)
            }
            else{
                const fetchedUser = await getUser(profileUserId)
                setProfileUser(fetchedUser)
                console.log(fetchedUser);
            }
        }
        fetchProfileUser()
    },[user])

    useEffect(()=>{
        if(profileUserId === user._id){
            setProfileUser(user)
        }

    },[])

  return (
    <div className='infocard'>
        <div className='infohead'>
            <h4>Profile Info</h4>
            {user._id === profileUserId && (
            <div>
                <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>  
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user}/>
            </div>
            )}
        </div>

        <div className='info'>
            <span>
                <b>Status </b>
            </span>
            <span>{profileUser.relationship}</span>
        </div>

        <div className='info'>
            <span>
                <b>Lives in </b>
            </span>
            <span>{profileUser.livesIn}</span>
        </div>

        <div className='info'>
            <span>
                <b>Works At </b>
            </span>
            <span>{profileUser.worksAt}</span>
        </div>

        <button className='button logout-button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default InfoCard
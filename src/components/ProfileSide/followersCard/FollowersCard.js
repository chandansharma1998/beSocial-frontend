import React, { useEffect, useState } from 'react'
import { getAllPersons } from '../../../api/requests'
import Users from '../../Users/Users'
import {useSelector} from 'react-redux'
import './followerscard.css'

const FollowersCard = () => {
    const {user} = useSelector(state => state.authReducer.authData)
    const [persons, setPersons] = useState([])
    useEffect(()=>{
        const fetchPersons = async() =>{
            const {data} = await getAllPersons()
            setPersons(data)
        }
        fetchPersons()
    },[])
  return (
    <div className='followers-card'>
        <h3>People you may know...</h3>
        {persons.map((person,id)=>{
            if(person._id !== user._id){
                return(
                    <Users person ={person} key={id}/>
                )
            }
        })}
    </div>
  )
  
}

export default FollowersCard
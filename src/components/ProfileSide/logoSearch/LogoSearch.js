import React from 'react'
import './logosearch.css'
import {UilSearch} from '@iconscout/react-unicons'
import logo from '../../../img/logo.png'

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
        <img src={logo}/>
        <div className='search'>
            <input type='text' placeholder='#Explore'/>
            <div className='s-icon'>
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch
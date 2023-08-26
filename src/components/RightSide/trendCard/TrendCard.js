import React from 'react'
import "./trendcard.css"
import {TrendData} from '../trendData/data'

const TrendCard = () => {
  return (
    <div className='trendcard'>
        <h3>Trends For You</h3>
        {TrendData.map((data,i)=>{
            return (
                <div className='trend'>
                    <span>#{data.name}</span>
                    <span>{data.shares}k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
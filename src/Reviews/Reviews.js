import React from 'react'
import './Reviews.css'
import { useState, useEffect } from 'react'
import data from '../data'

const Reviews = () => {
    const [reviews] = useState(data)
    const [index,setIndex] = useState(0)


    useEffect(() =>{
        const lastIndex = reviews.length - 1
        console.log(lastIndex)
    if(index < 0){
        setIndex(lastIndex)
    } else if (index > lastIndex){
        setIndex(0)
    }
    })
  return (
    <div>

    </div>
  )
}

export default Reviews
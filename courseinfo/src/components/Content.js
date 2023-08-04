import React from 'react'
import Part from './Part'
const Content = ({parts}) => {
    const total = parts.reduce((sum,part)=>{
        return sum+=part.exercises
    },0)
  return (
    <ul>
        {parts.map(part=>(
            <Part key={part.id} part={part}/>
        ))}
        <h4>Total number of exercises : {total}</h4>
    </ul>
  )
}

export default Content
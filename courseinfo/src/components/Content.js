import React from 'react'
import Part from './Part'
const Content = ({content}) => {
  return (
    <ul>
        {content.map((item)=>(
            <Part key={item.id} part={item}/>
        ))}
    </ul>
  )
}

export default Content
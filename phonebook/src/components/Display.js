import React from 'react'

const Display=({person})=>{
    return(
      <>
        {
          person.map(p=>(
            <p key={p.name}>Name: {p.name}-{p.number}</p>
          ))
        }
      </>
    )
  }
export default Display
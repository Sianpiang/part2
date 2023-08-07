import React from 'react'

const Display=({person,handleDelete})=>{
    return(
      <>
        {
          person.map(p=>(
            <div key={p.name}>
              <p key={p.name}>Name: {p.name}-{p.number}</p>
              <button onClick={()=>handleDelete(p.id)}>Delete</button>
            </div>
          ))
        }
      </>
    )
  }
export default Display
import React from 'react'

const Part = ({part}) => {
  return (
    <>
        <li className='item'>{`${part.name}:${part.exercises}`}</li>
    </>
  )
}

export default Part
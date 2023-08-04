import React from 'react'
import Header from './Header'
import Content from './Content'
const Course = ({course}) => {
  return (
    <div className='Container'>
        <Header
            header={course.name}
            id={course.id}
        />
        <Content
            content={course.parts}
        />
    </div>
  )
}

export default Course
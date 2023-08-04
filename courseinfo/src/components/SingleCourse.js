import React from 'react'
import Header from './Header'
import Content from './Content'
const SingleCourse = ({course}) => {
  return (
    <div className='singleCourse'>
        <Header
            title={course.name}
        />
        <Content
            parts={course.parts}
        />
    </div>
  )
}

export default SingleCourse
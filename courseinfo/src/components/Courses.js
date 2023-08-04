import React from 'react'
import SingleCourse from './SingleCourse'
const Course = ({courses}) => {
  return (
    <>
      <h1 className='title'>Web development curriculum</h1>
      {courses.map(course=>(
        <SingleCourse key={course.id} course={course}/>
      ))}
    </>
  )
}

export default Course
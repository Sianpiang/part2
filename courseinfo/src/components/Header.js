import React from 'react'

const Header = ({header,id}) => {
  return (
    <h1 key={id}>{header}</h1>
  )
}

export default Header
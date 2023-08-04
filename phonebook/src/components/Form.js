import React from 'react'

const Form = ({handleSubmit,newName,newNum,setNewName,setNewNum}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
          name: <input 
            value={newName}
            onChange={(e)=>setNewName(e.target.value)}
          />
          number: <input 
            type='number'
            value={newNum}
            onChange={(e)=>setNewNum(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
import { useState } from 'react'
import Display from './components/Display'
import Search from './components/Search'
import Form from './components/Form'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(persons[0].name.toLowerCase())
    const Isthere = persons.find((person)=>person.name===newName?true:false);
    if(!Isthere){
    setPersons(persons.concat({name:newName,number:newNum}))
    setNewName("")
    }
    else{
      alert(`${newName} is already added to phonebook`)
      setNewName("")
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        newNum={newNum}
        setNewName={setNewName}
        setNewNum={setNewNum}
      />
      <h2>Numbers</h2>
      <Display
        person={persons.filter(person=>person.name.toLowerCase().includes(search.toLowerCase()))}
      />
    </div>
  )
}

export default App

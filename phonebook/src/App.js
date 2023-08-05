import { useState,useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'
import Search from './components/Search'
import Form from './components/Form'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')
  useEffect(()=>{
    const fetchPersons=async()=>{
      const getPersons=await axios.get("http://localhost:3001/persons");
      setPersons(getPersons.data)
    }
    fetchPersons();
  },[])
  const handleSubmit = (e)=>{
    e.preventDefault();
    const Isthere = persons.find((person)=>person.name===newName?true:false);
    if(!Isthere){
    setPersons(persons.concat({name:newName,number:newNum}))
    setNewName("")
    setNewNum("")
    }
    else{
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      setNewNum("")
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

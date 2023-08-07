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
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const Isthere = persons.find((person)=>person.name.toLowerCase()===newName.toLowerCase()?true:false);
    const newPerson = {name:newName,number:newNum}
    if(!Isthere){
    const addPerson = await axios.post("http://localhost:3001/persons",newPerson);
    setPersons(persons.concat(addPerson.data));
    setNewName("")
    setNewNum("")
    }
    else{
      const change =window.confirm(`${newName} is already added to phonebook,change the old number to new number?`);
      const id = persons.find(person=>person.name.toLowerCase()===newName.toLowerCase())
      if(change){
        const item = persons.find(person=>person.id===id.id);
        const newItem = {...item,number:newNum};
        const changeNo = await axios.put(`http://localhost:3001/persons/${id.id}`,newItem);
        setPersons(persons.map(person=>person.id!==id.id?person:changeNo.data))
      }
      setNewName("")
      setNewNum("")
    }
  }
  const handleDelete=async(id)=>{
    const item = persons.find(person=>person.id===id);
    const deleteItem = await axios.delete(`http://localhost:3001/persons/${id}`,item);
    setPersons(persons.filter(person=>person.id!==id));
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
        person={persons.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App

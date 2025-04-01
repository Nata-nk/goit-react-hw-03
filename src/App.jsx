import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [contact, setContact] = useState(() => {

    const savedCount = localStorage.getItem("feedback-state");

    if (savedCount !== null) {
      return JSON.parse(savedCount);
    }

    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

  });


  const [filtr, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem("feedback-state", JSON.stringify(contact));
  }, [contact]);

  const addContact = (newContact) => {
    setContact((prevContact) => {
      return ([...prevContact, newContact])
    })
  }

  const deleteContact = (id) => {
    setContact(prevContact => {
      return prevContact.filter(contact => contact.id !== id)
    })
  }

  const filterContact = contact.filter(cont => cont.name.toLowerCase().includes(filtr.toLowerCase())
  )





  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filtr} onFilter={setFilter} />
        <ContactList contact={filterContact} onDelete={deleteContact} />
      </div>
    </>
  )
}

export default App


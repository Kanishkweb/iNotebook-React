import React from 'react'
import AddNote from './AddNote';
import Notes from './Notes';
// import { useContext } from 'react'
// import noteContext from '../context/notes/noteContext'
// import NoteItem from './NoteItem'
const Home = () => {

  return (
    <>
      <AddNote/>
       <Notes />
      
    </>
  )
}

export default Home;
import React,{useContext,useEffect} from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
  }, [ ])
  
  return (
    <h1>This is About {a.state.name} and he is in class {a.state.class}. </h1>
  )
}

export default About;
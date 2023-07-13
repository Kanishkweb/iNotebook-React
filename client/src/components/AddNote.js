import React,{useState} from 'react'
// import Notes from './Notes';
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
// import NoteItem from './NoteItem'
const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "" , tag: ""})

    const handleClick = (e)=> {
      e.preventDefault();
      addNote(note.title, note.description, note.tag)
      setNote({title: "", description: "" , tag: "default"})
    }
    const onChange = (e)=> {
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <>
      <div className='container'>
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" value={note.description}  name='description' minLength={5} required onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" value={note.tag} name='tag' onChange={onChange} />
          </div>
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note </button>
        </form>
      </div>
    </>
  )
}

export default AddNote;
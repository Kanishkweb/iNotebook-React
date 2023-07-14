import React, { useContext, useEffect, useRef,useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
import { useNavigate } from 'react-router-dom'

const Notes = () => {
    const history = useNavigate();
    // Using USe State hook--------------
    const [note, setNote] = useState({id:"",etitle: "", edescription: "" , etag: ""})
    const context = useContext(noteContext)
    const { notes, getNotes,editNote } = context;
    const ref = useRef(null)
    const refClose = useRef(null)
    // Update Note Function------------
    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({id:currentNote._id, etitle:currentNote.title , edescription:currentNote.description , etag:currentNote.tag})
    }
    // onChange Function----------------
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})

    }
    // handleCLick Function----------------
    const handleClick = (e) => {
        // console.log('Updating the Note',note)
        editNote(note.id, note.etitle, note.edescription , note.etag)
        refClose.current.click()        
    }
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        } else{
            history('/login');
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} minLength={5} required value={note.etitle} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' onChange={onChange} minLength={5} required value={note.edescription} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' onChange={onChange} value={note.etag} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5}  className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3 mx-2">
                <h1>Your Note</h1>
                <div className="container mx-8"> 
                {notes.length===0 && 'No Notes to Display'}
                </div>
                {notes.map((note) => {
                    // console.log(note);
                    return <NoteItem note={note} updateNote={updateNote} key={note._id} />
                })}
            </div>
        </>
    )
}

export default Notes


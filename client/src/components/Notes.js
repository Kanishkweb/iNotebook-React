import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes } = context;
    return (
        <>
            <div className="row my-3 mx-2">
                <h1>Your Note</h1>
                {notes.map((note) => {
                    console.log(note);
                    return <NoteItem note={note} key={note._id} />
                })}
            </div>
        </>
    )
}

export default Notes


import React, { useContext, useEffect,useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNotes } = context;
    const updateNote = () => {
        ref.current.click()
    }
    const ref = useRef(null)
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button ref={ref} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3 mx-2">
                <h1>Your Note</h1>
                {notes.map((note) => {
                    console.log(note);
                    return <NoteItem note={note} updateNote={updateNote} key={note._id} />
                })}
            </div>
        </>
    )
}

export default Notes


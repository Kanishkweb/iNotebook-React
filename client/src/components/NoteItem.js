import React,{useContext} from 'react'   //rafce
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context;
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3 ">
                <div className="card-body">
                    <div className="icons mx-2 d-flex">
                    <h5 className="card-title">{note.title}</h5>
                    <i className="fa-solid fa-trash mx-1 my-1" onClick={() => {deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-file-pen mx-1 my-1"></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    );
}

export default NoteItem
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    
      {
        "_id": "64abb3e6843a92f7865f1c7f",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Updating title",
        "description": "Adding a description using a new Update",
        "tag": "UpdatePurpose",
        "date": "2023-07-10T07:31:50.901Z",
        "__v": 0
      },
      {
        "_id": "64abb460843a92f7865f1c83",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Adding a note using new Project file ",
        "description": "I am adding this note for testing  purpose",
        "tag": "General",
        "date": "2023-07-10T07:33:52.406Z",
        "__v": 0
      },
      {
        "_id": "64abb3e6843a9v2f7865f1cz7f",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Updating title",
        "description": "Adding a description using a new Update",
        "tag": "UpdatePurpose",
        "date": "2023-07-10T07:31:50.901Z",
        "__v": 0
      },
      {
        "_id": "64abb460843a92vf7865fn1c83",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Adding a note using new Project file ",
        "description": "I am adding this note for testing  purpose",
        "tag": "General",
        "date": "2023-07-10T07:33:52.406Z",
        "__v": 0
      },
      {
        "_id": "64abb3e6843a92f7865f1ca7f",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Updating title",
        "description": "Adding a description using a new Update",
        "tag": "UpdatePurpose",
        "date": "2023-07-10T07:31:50.901Z",
        "__v": 0
      },
      {
        "_id": "64abb4m60843a92f7865f1c83",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Adding a note using new Project file ",
        "description": "I am adding this note for testing  purpose",
        "tag": "General",
        "date": "2023-07-10T07:33:52.406Z",
        "__v": 0
      },
      {
        "_id": "64abb3eq6843a92f7865f1c7f",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Updating title",
        "description": "Adding a description using a new Update",
        "tag": "UpdatePurpose",
        "date": "2023-07-10T07:31:50.901Z",
        "__v": 0
      },
      {
        "_id": "64abb460843a92f7865f1oc83",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Adding a note using new Project file ",
        "description": "I am adding this note for testing  purpose",
        "tag": "General",
        "date": "2023-07-10T07:33:52.406Z",
        "__v": 0
      },
      {
        "_id": "64asbb3e6843a92f7865f1c7f",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Updating title",
        "description": "Adding a description using a new Update",
        "tag": "UpdatePurpose",
        "date": "2023-07-10T07:31:50.901Z",
        "__v": 0
      },
      {
        "_id": "64abb460843ka92f7865f1c83",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Adding a note using new Project file ",
        "description": "I am adding this note for testing  purpose",
        "tag": "General",
        "date": "2023-07-10T07:33:52.406Z",
        "__v": 0
      },
      {
        "_id": "64abb3sge6843a92f7865f1c7f",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Updating title",
        "description": "Adding a description using a new Update",
        "tag": "UpdatePurpose",
        "date": "2023-07-10T07:31:50.901Z",
        "__v": 0
      },
      {
        "_id": "64abb460843a9jhg2f7865f1c83",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Adding a note using new Project file ",
        "description": "I am adding this note for testing  purpose",
        "tag": "General",
        "date": "2023-07-10T07:33:52.406Z",
        "__v": 0
      }
    ]
  
  const [notes, setNotes] = useState(notesInitial)

  // Add a Note 
  const addNote = (title,description,tag) => {
    // Todo Api Call
     const note =  {
      "_id": "64abb460843a9jhg2f78898965f1c83",
      "user": "64a9191fa7930a685da0a4a4",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-07-10T07:33:52.406Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }
  // Delete a Note
  const deleteNote = () => {

  }
  // Edit a Note 
  const editNote = ()=> {

  }
  return (
    <NoteContext.Provider value={{ notes, addNote,deleteNote,editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
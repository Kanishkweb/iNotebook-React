import NoteContext from "./noteContext";   // Warehouse  // inside the warehouse create context available
import { useState } from "react";
const NoteState = (props) => {
  const host = 'https://black-hairdresser-mvcqo.pwskills.app:8000'
  const notesInitial = [

    {
      "_id": "64abb3e6843a92f7865f1c7f",
      "user": "64a9191fa7930a685da0a4a4",
      "title": "Updating title",
      "description": "Adding a description using a new Update",
      "tag": "UpdatePurpose",
      "date": "2023-07-10T07:31:50.901Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial)

  // --Get-All-Notes-------------------------------------------------//

  const getNotes = async () => {

    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {   //64abb3e6843a92f7865f1c7f
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhOTE5MWZhNzkzMGE2ODVkYTBhNGE0In0sImlhdCI6MTY4ODk3Mzk2M30.t-8t7ckmHThLZLN4oJwvftTanhwg7qjhVLx86EiEaUM'
      },
    });
    const json = await response.json();
    console.log(json)
    setNotes(json)
  }


  // --Add-a-Note----------------------------------------------------//



  const addNote = async (title, description, tag) => {

    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {   //64abb3e6843a92f7865f1c7f
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhOTE5MWZhNzkzMGE2ODVkYTBhNGE0In0sImlhdCI6MTY4ODk3Mzk2M30.t-8t7ckmHThLZLN4oJwvftTanhwg7qjhVLx86EiEaUM'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
    setNotes(notes.concat(note))

  }

  // --Delete-a-Note--------------------------------------------------//



  const deleteNote = async (id) => {

    // Api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {   //64abb3e6843a92f7865f1c7f
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhOTE5MWZhNzkzMGE2ODVkYTBhNGE0In0sImlhdCI6MTY4ODk3Mzk2M30.t-8t7ckmHThLZLN4oJwvftTanhwg7qjhVLx86EiEaUM'
      },
    });
    const json = await response.json();
    console.log(json)
    console.log("Deleteing the note with id :" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }

  // --Edit-a-Note-----------------------------------------------------// 



  const editNote = async (id, title, description, tag) => {
    // Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {   //64abb3e6843a92f7865f1c7f
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhOTE5MWZhNzkzMGE2ODVkYTBhNGE0In0sImlhdCI6MTY4ODk3Mzk2M30.t-8t7ckmHThLZLN4oJwvftTanhwg7qjhVLx86EiEaUM'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json)

    // Logic to edit in client 
    let newNotes =JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];

      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
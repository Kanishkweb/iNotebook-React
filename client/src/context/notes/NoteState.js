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
      },
      {
        "_id": "64abb460843a92f7865f1c83",
        "user": "64a9191fa7930a685da0a4a4",
        "title": "Adding a note using new Project file ",
        "description": "I am adding this note for testing  purpose",
        "tag": "General",
        "date": "2023-07-10T07:33:52.406Z",
        "__v": 0
      }
    ]
  
  const [notes, setNotes] = useState(notesInitial)

  // --Add-a-Note----------------------------------------------------//



  const addNote = async (title,description,tag) => {
    // Todo Api Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote` , {   //64abb3e6843a92f7865f1c7f
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhOTE5MWZhNzkzMGE2ODVkYTBhNGE0In0sImlhdCI6MTY4ODk3Mzk2M30.t-8t7ckmHThLZLN4oJwvftTanhwg7qjhVLx86EiEaUM'
      },
      body: JSON.stringify({title,description,tag})
    });
    // const json =  response.json();
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

  // --Delete-a-Note--------------------------------------------------//



  const deleteNote = (id) => {
    console.log("Deleteing the note with id :" + id)
    const newNotes = notes.filter((note) => {return note._id!==id})
    setNotes(newNotes)
  }

  // --Edit-a-Note-----------------------------------------------------// 



  const editNote = async (id,title,description,tag)=> {
    // Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}` , {   //64abb3e6843a92f7865f1c7f
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhOTE5MWZhNzkzMGE2ODVkYTBhNGE0In0sImlhdCI6MTY4ODk3Mzk2M30.t-8t7ckmHThLZLN4oJwvftTanhwg7qjhVLx86EiEaUM'
      },
      body: JSON.stringify({title,description,tag})
    });
    const json =  response.json();
    console.log(json)

    // Logic to edit in client 
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if(element._id === id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      } 
      
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote,deleteNote,editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
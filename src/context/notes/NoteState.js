import { useState } from 'react';
import NoteContext from './NoteContext';
const NoteState = (props) =>{
    const host = "http://localhost:5000"
    const notesInitial = []
      const [notes, setNotes] = useState(notesInitial)

      //Get all note
     const getNotes = async () =>{
      //TODO: API Call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViN2U1MjMwYTJiZjNlMzdmNDI0YzhjIn0sImlhdCI6MTcwNjYxMDEwOX0.YLXydrvaN2PylSuPEYDdqhYaftTDoq81PzpPep7TJOQ"
        } 
      });
      const json = await response.json();
      console.log(json)
     }
      //Add a note
     const addNote = async (id,title,description,tag) =>{
      //TODO: API Call
      const response = await fetch(`${host}//api/notes/addnotes/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViN2U1MjMwYTJiZjNlMzdmNDI0YzhjIn0sImlhdCI6MTcwNjYxMDEwOX0.YLXydrvaN2PylSuPEYDdqhYaftTDoq81PzpPep7TJOQ"
        },
        body: JSON.stringify({title,description,tag}), 
      });
      const note = 
      {
        "_id": "65b886783092daf6667863920",
        "user": "65b7e5230a2bf3e37f424c8c",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2024-01-30T05:17:39.525Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
     }

      //Delete a note
      const deleteNote = (id) =>{
        //TODO: API Call
        console.log("deleting the note with id" + id);
        const newNotes = notes.filter((note) => {return note._id !== id})
        setNotes(newNotes);
      }

      //Edit a note
      const editNote = async (id,title,description,tag) =>{
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViN2U1MjMwYTJiZjNlMzdmNDI0YzhjIn0sImlhdCI6MTcwNjYxMDEwOX0.YLXydrvaN2PylSuPEYDdqhYaftTDoq81PzpPep7TJOQ"
          },
          body: JSON.stringify({title,description,tag}), 
        });
        const json =  response.json();
        
        //Logic to edit in client
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
        <NoteContext.Provider value = {{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
    }
export default NoteState;
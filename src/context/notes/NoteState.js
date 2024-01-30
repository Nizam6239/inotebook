import { useState } from 'react';
import NoteContext from './NoteContext';
const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "65b885b840bdef6fb3a8665e",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2024-01-30T05:14:32.908Z",
          "__v": 0
        },
        {
          "_id": "65b885b940bdef6fb3a86660",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2024-01-30T05:14:33.091Z",
          "__v": 0
        },
        {
          "_id": "65b885b940bdef6fb3a86662",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2024-01-30T05:14:33.252Z",
          "__v": 0
        },
        {
          "_id": "65b885b940bdef6fb3a86664",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2024-01-30T05:14:33.405Z",
          "__v": 0
        },
        {
          "_id": "65b885b940bdef6fb3a86666",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2024-01-30T05:14:33.546Z",
          "__v": 0
        },
        {
          "_id": "65b885b940bdef6fb3a86668",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2024-01-30T05:14:33.712Z",
          "__v": 0
        },
        {
          "_id": "65b885b940bdef6fb3a8666a",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My Title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2024-01-30T05:14:33.989Z",
          "__v": 0
        },
        {
          "_id": "65b88673092daf6667863920",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My note",
          "description": "please access the playlist",
          "tag": "Youtube",
          "date": "2024-01-30T05:17:39.525Z",
          "__v": 0
        },
        {
          "_id": "65b8cdac498ba7c646c61f4b",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My note",
          "description": "please access the playlist",
          "tag": "Youtube",
          "date": "2024-01-30T10:21:32.121Z",
          "__v": 0
        },
        {
          "_id": "65b8dc1bc1b7e7eafdea4b8a",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My note",
          "description": "please access the playlist",
          "tag": "Youtube",
          "date": "2024-01-30T11:23:07.867Z",
          "__v": 0
        },
        {
          "_id": "65b8dc41c1b7e7eafdea4b8e",
          "user": "65b7e5230a2bf3e37f424c8c",
          "title": "My note updated23",
          "description": "please access the playlist updated",
          "tag": "Youtube",
          "date": "2024-01-30T11:23:45.731Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value = {{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
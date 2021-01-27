import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
// import NoteItem from "./NoteItem"
// import NoteViewer from "./NoteViewer"

function NoteContainer() {

  const [currentTitle, setcurrentTitle] = useState('');
  const [currentBody, setcurrentBody] = useState('');
  const [currentId, setCurrentId] = useState(0)
  const [notes, setNotes] = useState([])

 

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/notes")
      .then((r) => r.json())
      .then(notes => {
        setNotes(notes)
      })
  }, [])



  function getUpdatedNote(updatedNote){
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote
      } else { 
        return note
      }
      
    }
    )
    setNotes(updatedNotes)
  }

  function getClickedNote (title, body, id) {
    console.log(title, body, id)
    setcurrentTitle(title);
    setcurrentBody(body);
    setCurrentId(id)

  }

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes={notes} getClickedNote={getClickedNote} />
        <Content getUpdatedNote={getUpdatedNote} currentId={currentId} currentTitle={currentTitle} currentBody={currentBody} />
        
      </div>
    </>
  );
}

export default NoteContainer;

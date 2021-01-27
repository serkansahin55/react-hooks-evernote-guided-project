import React from "react";
import NoteList from "./NoteList";


function Sidebar({notes, getClickedNote, setNotes}) {


  function handleNewClick(e) {
    e.preventDefault()
  
   fetch("http://localhost:3000/api/v1/notes", {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({title: 'name', body: "placeholder"})
  })
  .then(response => response.json())
  .then((note) => {
    console.log('Success note object:', note);
    setNotes([...notes, note]);
  })
}


  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} getClickedNote={getClickedNote} />
      <button onClick={handleNewClick}>New</button>
    </div>
  );
  }


export default Sidebar;


// body: JSON.stringify({title: 'default', body: "placeholder"})

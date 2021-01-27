import React from "react";
import NoteList from "./NoteList";


function Sidebar({notes, getClickedNote}) {


  function handleNewClick(e) {
    e.preventDefault()
  
   fetch("http://localhost:3000/api/v1/notes", {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({title: 'default', body: "placeholder"})
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
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

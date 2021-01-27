import React from "react";
// import NoteList from "./NoteList";

function NoteViewer({removeDeletedNote, currentTitle, currentBody, currentId, setEditFormVisible, editFormVisible}) {


  function handleClick() {
    console.log('edit clicked!');
    setEditFormVisible(!editFormVisible);
  }

  function handleDelete(e) {
    e.preventDefault()

    console.log('deleting note', currentId);    

    fetch(`http://localhost:3000/api/v1/notes/${currentId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }      
    })
      .then(response => response.json())
      .then(data => {
        removeDeletedNote(data.noteId)
      })      
  }


  return (
  
  <>
      <h1>Title: {currentTitle}</h1>
      <h3>Body: {currentBody} </h3>
      <button onClick={handleClick}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

 </>
  );
}

export default NoteViewer;




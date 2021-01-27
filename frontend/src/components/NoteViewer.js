import React from "react";
// import NoteList from "./NoteList";

function NoteViewer({currentTitle, currentBody, setEditFormVisible, editFormVisible}) {


  function handleClick() {
    console.log('edit clicked!');
    setEditFormVisible(!editFormVisible);
  }

  
  return (
  
  <>
      <h1>Title: {currentTitle}</h1>
      <h3>Body: {currentBody} </h3>
      <button onClick={handleClick}>Edit</button>

 </>
  );
}

export default NoteViewer;




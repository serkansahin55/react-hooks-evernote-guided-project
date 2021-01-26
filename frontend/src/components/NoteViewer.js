import React from "react";
// import NoteList from "./NoteList";

function NoteViewer({currentTitle, currentBody}) {
  
  return (
    <>

      <h1>Title: {currentTitle}</h1>
      <h3>Body: {currentBody} </h3>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;

import React, { useState } from "react";
// import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";

function NoteViewer({currentTitle, currentBody}) {

  const [editFormVisible, seteditFormVisible] = useState(false);

  function handleClick() {
    console.log('edit clicked!');
    editFormVisible(true);
  }
  
  return (
  <>
      <h1>Title: {currentTitle}</h1>
      <h3>Body: {currentBody} </h3>
      <button onClick={handleClick}>Edit</button>

      if (editFormVisible) {
        <NoteEditor currentTitle={currentTitle} currentBody={currentBody} />
      }
    </>
  );
}

export default NoteViewer;

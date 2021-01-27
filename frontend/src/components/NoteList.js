import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, getClickedNote}) {

  const noteItems = notes.map((note) => {
    return <NoteItem key={note.id} noteId={note.id} noteTitle={note.title} noteBody={note.body} getClickedNote={getClickedNote} />
  })
  return (
    <ul>
      {noteItems} 
    </ul>
  );
}

export default NoteList;

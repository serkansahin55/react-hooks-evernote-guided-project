import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, getClickedNote}) {


  
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} getClickedNote={getClickedNote} />
      <button>New</button>
    </div>
  );
}

export default Sidebar;

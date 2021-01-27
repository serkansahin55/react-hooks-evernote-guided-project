import React, { useState } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({getUpdatedNote, currentTitle, currentBody, currentId}) {

  const [editFormVisible, setEditFormVisible] = useState(false)


  const getContent = () => {
    if (editFormVisible === true) {
      return <NoteEditor getUpdatedNote={getUpdatedNote} currentId={currentId} editFormVisible={editFormVisible} setEditFormVisible={setEditFormVisible} currentTitle={currentTitle} currentBody={currentBody} />;
    } else if (editFormVisible === false) {
      return <NoteViewer  editFormVisible={editFormVisible} setEditFormVisible={setEditFormVisible} currentTitle={currentTitle} currentBody={currentBody} />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}
  </div>;
}

export default Content;

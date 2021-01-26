import React, {useState} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
// import NoteItem from "./NoteItem"
// import NoteViewer from "./NoteViewer"

function NoteContainer({notes}) {

  const [currentTitle, setcurrentTitle] = useState('');
  const [currentBody, setcurrentBody] = useState('');

  function getClickedNote (title, body) {
    console.log(title, body)
    setcurrentTitle(title);
    setcurrentBody(body);
  }

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes={notes} getClickedNote={getClickedNote} />
        <Content notes={notes} currentTitle={currentTitle} currentBody={currentBody} />
        
      </div>
    </>
  );
}

export default NoteContainer;

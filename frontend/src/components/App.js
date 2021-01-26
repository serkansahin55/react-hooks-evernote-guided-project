import React, {useState, useEffect} from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";


/*
-App
  -Header
  -NoteContainer
    -Search
    -SideBar
      -NoteList
        - NoteItem
    -Content
      -Instructions
*/


function App() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/notes")
      .then((r) => r.json())
      .then(notes => {
        setNotes(notes)
      })
  }, [])
 
  return (
    <div className="app">
      <Header /> 
      <NoteContainer notes={notes}/>
    </div>
  );
}

export default App;
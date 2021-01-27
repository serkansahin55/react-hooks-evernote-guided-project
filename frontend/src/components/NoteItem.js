import React from "react";
import TextTruncate from 'react-text-truncate'

function NoteItem({noteTitle, noteBody, noteId, getClickedNote}) {

  // const [readMore,setReadMore]=useState(false);

  // function displayNote() {
  //   {setReadMore(!readMore)}
  // }
  

  function handleClick() {
    getClickedNote(noteTitle, noteBody, noteId) 
    }

  return (
    <li>
        <h1 onClick={handleClick}>{noteTitle}</h1>
        <TextTruncate
          line={2}
          element="span"
          truncateText="…"
          text={noteBody}
          />
          {/* <button onClick={displayNote}><p>Display note...</p></button> */}

        
    </li>
  );
}

export default NoteItem;

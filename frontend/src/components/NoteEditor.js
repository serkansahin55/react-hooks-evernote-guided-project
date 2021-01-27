import React, {useState} from "react";



function NoteEditor({ getUpdatedNote, currentId, currentTitle, currentBody, editFormVisible, setEditFormVisible}) {

  const [editTitle, setEditTitle] = useState(currentTitle)
  const [editBody, setEditBody] = useState(currentBody)

  

  function handleClick(){
    setEditFormVisible(!editFormVisible)
  }

  function handleSave(e){
    e.preventDefault()

    const data = {title: editTitle, body: editBody}

    fetch(`http://localhost:3000/api/v1/notes/${currentId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

      .then(response => response.json())
      .then(data => {
          getUpdatedNote(data)
      })      
  }



  return (
    <form className="note-editor">
      <input onChange={(e) => setEditTitle(e.target.value)} type="text" name="title" value={editTitle} />
      <textarea onChange={(e) => setEditBody(e.target.value)}name="body" value={editBody} />
      <div className="button-row">
        <input onClick={handleSave} className="button" type="submit" value="Save" />
        <button onClick={handleClick} type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;

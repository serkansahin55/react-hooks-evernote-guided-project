import React from "react";

function NoteEditor({ currentTitle, currentBody}) {
  return (
    <form className="note-editor">
      <input type="text" name="title" value={currentTitle} />
      <textarea name="body" value={currentBody} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;

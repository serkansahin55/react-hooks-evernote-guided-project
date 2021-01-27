import React, { useState } from "react";

function Search({notes, setNotes}) {

  const [searchParam, setSearchParam] = useState("");

  

  function handleSubmit(e) {
    
    // only Enter button press will submit the form
    if (e.keyCode != 13) {
      return
    }

    console.log('submitting filtered form');
    console.log(e.keyCode)
    e.preventDefault()
  
   fetch(`http://localhost:3000/api/v1/notes?search=${searchParam}`, {    
    headers: {
      'Content-Type' : 'application/json'
    }    
  })
  .then(response => response.json())
  .then((filterdNotes) => {
    setNotes(filterdNotes)
  })
}

  function handleSearchParamChange(e) {    
    setSearchParam(e.target.value)
  }

  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        onChange={handleSearchParamChange} 
        onKeyDown={handleSubmit}
        placeholder="Search Notes" />
    </div>
  );
}

export default Search

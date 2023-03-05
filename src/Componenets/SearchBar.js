import React, { useState } from 'react'
import '../css/SearchBar.css'

function SearchBar({onSubmit}) {
  const[term,setTerm] = useState('');

  const handleFormSubmit=(event)=>{
    event.preventDefault();
      onSubmit(term);
  }
  const handleChange=(event)=>{
    setTerm(event.target.value.replace(/[a-z]/,''));
  }
  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term:</label>
      <input value={term} onChange={handleChange}/><br></br>
      {term.length <3 && 'Term Must be longer then 3 charchter'}
      </form>
    </div>
  )
}

export default SearchBar
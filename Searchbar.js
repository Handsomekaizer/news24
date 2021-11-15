import React, { useState } from 'react';

function Searchbar({ search, setSearch, setPage }) {
  const [q, setQ] = useState(search);
  function handleSubmit(e) {
    e.preventDefault();
    setPage(1);
    setSearch(q);
  }
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className='row'>
        <input
          type='text'
          placeholder='Search by keyword...'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type='submit'>Search</button>
      </div>
    </form>
  );
}

export default Searchbar;

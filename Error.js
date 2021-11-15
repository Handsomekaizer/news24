import React from 'react';

function Error({ error }) {
  return (
    <div id='error'>
      <h1>{error}</h1>
    </div>
  );
}

export default Error;

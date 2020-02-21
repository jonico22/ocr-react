import React from 'react';

export default ({name, value}) => {
  return (
    <div>
      <label for={name}>{value}</label>
    </div>
  )
}
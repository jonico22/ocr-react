import React from 'react';

export default ({name, value}) => {
  return (
    <div>
      <input type="text" name={name} value={value} />
    </div>
  )
}
import React from 'react';
import Price from './Price';
import Time from './Time';

export default ({category, price, time}) => {
  return (
    <div>
      <Price name={category} value={price} />
      <Time name={category} value={time} />
    </div>
  )
}
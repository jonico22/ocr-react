import React from 'react';
import Label from './Label';
import Input from './Input';

export default ({category, discount}) => {
  return (
    <div>
      <Label name={`discount${category}`} value={'Descuento (En caso hubiese)'} />
      <Input name={`discount${category}`} value={discount} />
    </div>
  )
}
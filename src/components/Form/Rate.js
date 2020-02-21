import React from 'react';
import Label from './Label';
import Input from './Input';

export default ({category, rate}) => {
  return (
    <div>
      <Label name={`rate${category}`} value={'Monto Tarifa Alta Demanda (0 en caso no hubiese)'} />
      <Input name={`rate${category}`} value={rate} />
    </div>
  )
}
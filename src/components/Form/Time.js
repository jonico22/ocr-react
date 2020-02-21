import React from 'react';
import Label from './Label';
import Input from './Input';

export default ({category, time}) => {
  return (
    <div>
      <Label name={`time${category}`} value={`Tiempo Estimado de llegada ${category}` (Minutos)} />
      <Input name={`time${category}`} value={time} />
    </div>
  )
}
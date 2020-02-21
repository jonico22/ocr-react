import React from 'react';
import Label from './Label';
import Input from './Input';

export default ({category, price}) => {
  return (
    <div>
      <Label name={`price${category}`} value={`Precio Estimado ${data.category}`} />
      <Input name={`price${category}`} value={price} />
    </div>
  )
}
import Label from './Label';
import Input from './Input';

export default ({category, value}) => {
  const [price, setPrice] = useState('');
  const [rate, setRate] = useState('');
  const [category, setCategory] = useState([]);
  const [time, setTime] = useState([]);
  const [discount, setDiscount] = useState([]);

  return (
    <form>
      {
        list.map((item,id)=>{
          return <li key={id}>{item}</li>
        })
      }
      <Label />
      <Input />
    </form>
  )
}
/*
export const addElem = (formElement, obj) => {
  obj.forEach(elem => {
    formElement.appendChild(priceAndTimeElement(elem));
  });
  formElement.appendChild(discountElem(obj))
  if(obj[0].category === 'Easy Economy' || obj[0].category === 'Comfort' ) {
    formElement.appendChild(rateElem(obj))
  }
  return formElement;
}*/
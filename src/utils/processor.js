
const choose = (str, app, re) => {
  switch (app) {
    case 1:
      return beat(str,re)
    case 2:
      return cabify(str,re)
    case 3:
      return uber(str)
    case 4:
      return satelital(str,re)
    default:
      break;
  }
}

export default (listStrings, app) => {
  const re = /[$S§5](?=\/)/g;
  listStrings.forEach(str => choose(str, app, re))
}

const cabify = (str, re) => {
  const arrPrice = [];
  if(re.test(str)) {
    const index = listStrings.indexOf(str);
    arrPrice.push({
      category: listStrings[index -1],
      price: str
    })
  }
  console.log(arrPrice);
}

const beat = () => {
  const arrPrice = [];
  if(re.test(str)) {
    const index = listStrings.indexOf(str);
    arrPrice.push({
      category: listStrings[index -1],
      price: str
    })
  }
  console.log(arrPrice);
}

const uber = (str, re) => {
  const arrPrice = [];
  if(re.test(str)) {
    const index = listStrings.indexOf(str);
    arrPrice.push({
      category: listStrings[index -1],
      price: str
    })
  }
  console.log(arrPrice);
}

const satelital = (str, re) => {
  const arrPrice = [];
  if(re.test(str)) {
    const index = listStrings.indexOf(str);
    arrPrice.push({
      category: listStrings[index -1],
      price: str
    })
  }
  console.log(arrPrice);
}


/*def _get_data(category, lista):
  print(lista)
  new_obj = {
      'category': category,
      'price': _get_price(lista),
      'time': _get_time(lista)
    }
  return new_obj

def _get_price(lista):
  for string in lista:
    for idx, x in enumerate(string):
      if x == 'S' or x == '$':
        return string.replace('$/', 'S/.')

def _get_time(lista):
  for string in lista:
    for i, x in enumerate(string):
      if x == 'm':
        if string[i + 1] == 'i':
          if string[i - 1] != 'n':
            if string[i - 2] != 'n' :
              return string[i - 2] + string[i - 1] + ' min'
            else :
              return string[i - 1] + ' min'
          else :
            return lista[lista.index(string) - 1] + ' min'*/
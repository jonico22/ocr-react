export default (listStrings) => {
  const arrPrice = [];
  listStrings.forEach(str => {
    const re = /[$S§](?=\/)/g;
    if(re.test(str)) {
      arrPrice.push(str)
    }
  })
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
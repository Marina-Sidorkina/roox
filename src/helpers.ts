interface IData {
  id: string;
  name: string;
  company: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
}

export const sortByAlphabet = (
  data: IData[],
  field: string,
) => {
  const sortFunction = (a: IData, b:IData) => {
    if (a[field] < b[field]) return -1;
    if (a[field] > b[field]) return 1;
    return 0;
  };

  return data.sort(sortFunction);
};

export const getNounWithEnding = (value: number) => {
  if (value.toString().endsWith('1')) return 'пользователь';
  if (
    value.toString().endsWith('2')
    || value.toString().endsWith('3')
    || value.toString().endsWith('4')) return 'пользователя';
  return 'пользователей';
};

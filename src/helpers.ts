import { IUserData } from './redux/reducers/usersListContainer';

export const sortByAlphabet = (
  data: IUserData[],
  field: string,
) => {
  const sortFunction = (a: IUserData, b:IUserData) => {
    if (a[field] < b[field]) return -1;
    if (a[field] > b[field]) return 1;
    return 0;
  };

  return data.sort(sortFunction);
};

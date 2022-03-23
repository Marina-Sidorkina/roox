import produce from 'immer';
import { UsersListActionTypeValue } from '../../constants';

interface IUserData {
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

interface ILoadUsersListActionType {
  type: string,
  payload: IUserData[],
}

const initialState = {
  users: [] as IUserData[],
};

const usersListReducer = (
  state = initialState,
  action: ILoadUsersListActionType,
) => produce(state, (draft: { users: IUserData[] }) => {
  switch (action.type) {
    case UsersListActionTypeValue.LOAD_USERS_LIST:
      draft.users = action.payload;
      return draft;
    default:
      return state;
  }
});

export default usersListReducer;

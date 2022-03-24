import produce from 'immer';
import { UsersListActionTypeValue } from '../../constants';

export interface IUserData {
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

interface IUsersListUpdateActionType {
  type: string,
  payload: IUserData[],
}

const initialState = {
  users: [] as IUserData[],
  isLoading: false,
  isError: false,
};

const usersListReducer = (
  state = initialState,
  action: IUsersListUpdateActionType,
) => produce(state, (draft: { users: IUserData[], isError: boolean, isLoading: boolean, }) => {
  switch (action.type) {
    case UsersListActionTypeValue.UPDATE_USERS_LIST:
      draft.users = action.payload;
      return draft;
    case UsersListActionTypeValue.SHOW_USERS_LIST_LOADING:
      draft.isLoading = true;
      return draft;
    case UsersListActionTypeValue.HIDE_USERS_LIST_LOADING:
      draft.isLoading = false;
      return draft;
    case UsersListActionTypeValue.SHOW_USERS_LIST_ERROR:
      draft.isError = true;
      return draft;
    case UsersListActionTypeValue.HIDE_USERS_LIST_ERROR:
      draft.isError = false;
      return draft;
    default:
      return state;
  }
});

export default usersListReducer;

import { Dispatch } from 'redux';
import API from '../../services/api';
import { UsersListActionTypeValue } from '../../constants';

const api = new API();

const updateUsersListAction = (response) => ({
  type: UsersListActionTypeValue.UPDATE_USERS_LIST,
  payload: response,
});

export const loadUsersListAction = () => (dispatch: Dispatch) => {
  api.getUsersList()
    .then((response) => {
      dispatch(updateUsersListAction(response));
    });
};

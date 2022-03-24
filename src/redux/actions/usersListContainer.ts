import { Dispatch } from 'redux';
import API from '../../services/api';
import { UsersListActionTypeValue } from '../../constants';

const api = new API();

const showLoadingAction = () => ({
  type: UsersListActionTypeValue.SHOW_USERS_LIST_LOADING,
});

const hideLoadingAction = () => ({
  type: UsersListActionTypeValue.HIDE_USERS_LIST_LOADING,
});

const showErrorAction = () => ({
  type: UsersListActionTypeValue.SHOW_USERS_LIST_ERROR,
});

const hideErrorAction = () => ({
  type: UsersListActionTypeValue.HIDE_USERS_LIST_ERROR,
});

const updateUsersListAction = (response) => ({
  type: UsersListActionTypeValue.UPDATE_USERS_LIST,
  payload: response,
});

export const loadUsersListAction = () => (dispatch: Dispatch) => {
  dispatch(hideErrorAction());
  dispatch(showLoadingAction());
  api.getUsersList()
    .then((response) => {
      dispatch(updateUsersListAction(response));
      dispatch(hideLoadingAction());
    })
    .catch(() => {
      dispatch(showErrorAction());
      dispatch(hideLoadingAction());
    });
};

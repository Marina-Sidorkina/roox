import { combineReducers } from 'redux';
import filterReducer from './filter';
import usersListReducer from './usersList';
import profileFormReducer from './profileForm';

export const rootReducer = combineReducers({
  filter: filterReducer,
  usersList: usersListReducer,
  form: profileFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

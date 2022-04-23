import { combineReducers } from 'redux';
import filterReducer from './filter';
import usersListReducer from './usersList';

export const rootReducer = combineReducers({
  filter: filterReducer,
  usersList: usersListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

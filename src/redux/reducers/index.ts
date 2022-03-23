import { combineReducers } from 'redux';
import filterReducer from './filterContainer';
import usersListReducer from './usersListContainer';

export const rootReducer = combineReducers({
  filter: filterReducer,
  usersList: usersListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

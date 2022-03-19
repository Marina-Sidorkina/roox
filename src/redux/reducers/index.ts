import { combineReducers } from 'redux';
import filterReducer from './filterContainer';

export const rootReducer = combineReducers({
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

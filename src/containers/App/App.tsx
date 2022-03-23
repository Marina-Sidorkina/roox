import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../redux/reducers';
import FilterContainer from '../FilterContainer';
import { loadUsersListAction } from '../../redux/actions/usersListContainer';

const App = () => {
  const stateValue = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersListAction());
  }, [stateValue]);

  return (
    <div className="app">
      { stateValue.filter.value }
      <br />
      { stateValue.usersList.users.length ? stateValue.usersList.users[0].name : 'Is Loading...' }
      <FilterContainer />
    </div>
  );
};

export default App;

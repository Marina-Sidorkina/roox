import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../redux/reducers';
import FilterContainer from '../FilterContainer';
import UsersListContainer from '../UsersListContainer';
import { loadUsersListAction } from '../../redux/actions/usersListContainer';
import Sidebar from '../../components/Sidebar';
import Page from '../../components/Page';

const App = () => {
  const stateValue = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersListAction());
  }, []);

  return (
    <div className="app">
      <Page>
        <Sidebar>
          { stateValue.filter.value }
          <FilterContainer />
        </Sidebar>
        <UsersListContainer />
      </Page>
    </div>
  );
};

export default App;

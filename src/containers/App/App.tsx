import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FilterContainer from '../FilterContainer';
import UsersListContainer from '../UsersListContainer';
import { loadUsersListAction } from '../../redux/actions/usersListContainer';
import Sidebar from '../../components/Sidebar';
import Page from '../../components/Page';
import Content from '../../components/Content';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersListAction());
  }, []);

  return (
    <div className="app">
      <Page>
        <Sidebar>
          <FilterContainer />
        </Sidebar>
        <Content>
          <UsersListContainer />
        </Content>
      </Page>
    </div>
  );
};

export default App;

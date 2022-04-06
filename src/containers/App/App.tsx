import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  HashRouter, Redirect, Route, Switch,
} from 'react-router-dom';
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
    <Page>
      <Sidebar>
        <FilterContainer />
      </Sidebar>
      <Content>
        <HashRouter>
          <Switch>
            <Route path="/users">
              <UsersListContainer />
            </Route>
            <Route path="/profile">
              <div>Здесь будет профиль пользователя...</div>
            </Route>
            <Redirect from="/" to="/users" />
          </Switch>
        </HashRouter>
      </Content>
    </Page>
  );
};

export default App;

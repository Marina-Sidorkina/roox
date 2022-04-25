import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  HashRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import FilterContainer from '../FilterContainer';
import UsersListContainer from '../UsersListContainer';
import { loadUsersListAction } from '../../redux/actions/usersList';
import Sidebar from '../../components/Sidebar';
import Page from '../../components/Page';
import Content from '../../components/Content';
import ProfileContainer from '../ProfileContainder';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersListAction());
  }, []);

  return (
    <Page>
      <HashRouter>
        <Sidebar>
          <FilterContainer />
        </Sidebar>
        <Content>
          <Switch>
            <Route path="/users">
              <UsersListContainer />
            </Route>
            <Route path="/profile/:id">
              <ProfileContainer />
            </Route>
            <Redirect from="/" to="/users" />
          </Switch>
        </Content>
      </HashRouter>
    </Page>
  );
};

export default App;

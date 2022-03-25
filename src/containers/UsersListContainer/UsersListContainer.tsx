import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { loadUsersListAction } from '../../redux/actions/usersListContainer';
import { sortByAlphabet } from '../../helpers';
import Loader from '../../components/Loader';
import LoadingErrorMessage from '../../components/LoadingErrorMessage';
import UsersList from '../../components/UsersList';
import UsersListItem from '../../components/UsersListItem';

const UsersListContainer = () => {
  const stateValue = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const users = stateValue.filter.value === 'initial'
    ? stateValue.usersList.users
    : sortByAlphabet(stateValue.usersList.users.slice(), stateValue.filter.value);

  useEffect(() => {
    dispatch(loadUsersListAction());
  }, []);

  if (stateValue.usersList.isLoading) {
    return <Loader />;
  }

  if (stateValue.usersList.isError) {
    return <LoadingErrorMessage />;
  }

  return (
    <UsersList>
      { users.map((item) => (
        <UsersListItem
          key={item.id}
          name={item.name}
          city={item.city}
          company={item.company}
        />
      )) }
    </UsersList>
  );
};

export default UsersListContainer;

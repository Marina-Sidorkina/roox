import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { loadUsersListAction } from '../../redux/actions/usersList';
import { sortByAlphabet } from '../../helpers';
import Loader from '../../components/Loader';
import LoadingErrorMessage from '../../components/LoadingErrorMessage';
import UsersList from '../../components/UsersList';
import UsersListItem from '../../components/UsersListItem';
import Counter from '../../components/Counter';

const UsersListContainer = () => {
  const stateValue = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const users = stateValue.filter.value === 'initial'
    ? stateValue.usersList.users
    : sortByAlphabet(stateValue.usersList.users.slice(), stateValue.filter.value);
  let content;

  useEffect(() => {
    dispatch(loadUsersListAction());
  }, []);

  if (stateValue.usersList.isLoading) content = <Loader />;

  if (stateValue.usersList.isError) content = <LoadingErrorMessage />;

  if (!stateValue.usersList.isLoading && !stateValue.usersList.isError) {
    content = users.map((item) => (
      <UsersListItem
        key={item.id}
        name={item.name}
        city={item.city}
        company={item.company}
      />
    ));
  }

  return (
    <>
      <UsersList>
        { content }
      </UsersList>
      {stateValue.usersList.isLoading ? null : <Counter count={users.length} />}
    </>
  );
};

export default UsersListContainer;

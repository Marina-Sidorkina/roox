import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { loadUsersListAction } from '../../redux/actions/usersListContainer';

const UsersListContainer = () => {
  const stateValue = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersListAction());
  }, []);

  if (stateValue.usersList.isLoading) {
    return <div>Загрузка...</div>;
  }

  if (stateValue.usersList.isError) {
    return <div>Что-то пошло не так. Попробуйте загрузить страницу позднее...</div>;
  }

  return (
    <ul>
      { stateValue.usersList.users.map((item) => (
        <li key={item.id}>
          <div>{`ФИО: ${item.name}`}</div>
          <div>{`город: ${item.city}`}</div>
          <div>{`компания: ${item.company}`}</div>
        </li>
      )) }
    </ul>
  );
};

export default UsersListContainer;

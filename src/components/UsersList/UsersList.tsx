import * as React from 'react';
import './UsersList.scss';

const UsersList = (
  props: { children: React.ReactChild | React.ReactFragment | null | undefined },
) => {
  const { children } = props;
  return (
    <div className="users-list">
      <h1 className="users-list__title">Список пользователей</h1>
      <ul className="users-list__items">
        {children[0]}
      </ul>
      {children[1]}
    </div>
  );
};

export default UsersList;

import * as React from 'react';
import './UsersListItem.scss';

const UsersListItem = (props: { name: string, city: string, company: string }) => {
  const { name, city, company } = props;

  return (
    <li className="users-list-item">
      <div className="users-list-item__line">
        <span className="users-list-item__field">ФИО: </span>
        {name}
      </div>
      <div className="users-list-item__line">
        <span className="users-list-item__field">город: </span>
        {city}
      </div>
      <div className="users-list-item__line">
        <span className="users-list-item__field">компания: </span>
        {company}
      </div>
      <a href="form" className="users-list-item__link">Подробнее</a>
    </li>
  );
};

export default UsersListItem;

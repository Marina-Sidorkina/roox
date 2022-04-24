import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/reducers';

interface IProfileParams {
  id: string;
}

const ProfileContainer = () => {
  const stateValue = useSelector((state: RootState) => state);
  const params = useParams() as IProfileParams;
  const info = stateValue.usersList.users.find((user) => user.id.toString() === params.id);

  return (
    <div className="profile">
      { info
        ? (
          <form className="profile__form">
            <div className="profile__top">
              <h1 className="profile__title">Профиль пользователя</h1>
              <button type="button">Редактировать</button>
            </div>
            <fieldset className="profile__fieldset">
              <label className="profile__label" htmlFor="name">Name</label>
              <input className="profile__input" type="text" placeholder={info.name} defaultValue={info.name} id="name" name="name" />
              <label className="profile__label" htmlFor="username">User name</label>
              <input className="profile__input" type="text" placeholder={info.name} defaultValue={info.name} id="username" name="username" />
              <label className="profile__label" htmlFor="email">E-mail</label>
              <input className="profile__input" type="email" placeholder={info.email} defaultValue={info.email} id="email" name="email" />
              <label className="profile__label" htmlFor="street">Street</label>
              <input className="profile__input" type="text" placeholder={info.street} defaultValue={info.street} id="street" name="street" />
              <label className="profile__label" htmlFor="city">City</label>
              <input className="profile__input" type="text" placeholder={info.city} defaultValue={info.city} id="city" name="city" />
              <label className="profile__label" htmlFor="zipcode">Zip code</label>
              <input className="profile__input" type="text" placeholder={info.zipcode} defaultValue={info.zipcode} id="zipcode" name="zipcode" />
              <label className="profile__label" htmlFor="phone">Phone</label>
              <input className="profile__input" type="text" placeholder={info.phone} defaultValue={info.phone} id="phone" name="phone" />
              <label className="profile__label" htmlFor="website">Website</label>
              <input className="profile__input" type="text" placeholder={info.website} defaultValue={info.website} id="website" name="website" />
              <label className="profile__label" htmlFor="comment">Comment</label>
              <textarea className="profile__textarea" id="comment" name="comment" />
            </fieldset>
            <button type="submit">Отправить</button>
          </form>
        )
        : 'Пользователь не выбран...' }
    </div>
  );
};

export default ProfileContainer;

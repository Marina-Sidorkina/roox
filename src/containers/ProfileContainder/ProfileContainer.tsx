import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState } from '../../redux/reducers';
import Input from '../../components/Input';
import TextField from '../../components/TextField';
import { unblockForm, updateForm, updateFormInput } from '../../redux/actions/profileForm';
import Form from '../../components/Form';

interface IProfileParams {
  id: string;
}

const ProfileContainer = () => {
  const stateValue = useSelector((state: RootState) => state);
  const params = useParams() as IProfileParams;
  const dispatch = useDispatch();
  const info = stateValue.usersList.users.find((user) => user.id.toString() === params.id);

  useEffect(() => {
    if (info) {
      dispatch(updateForm({
        name: info.name,
        userName: info.name,
        email: info.email,
        street: info.street,
        city: info.city,
        zipcode: info.zipcode,
        phone: info.phone,
        website: info.website,
        comment: '',
      }));
    }
  }, [stateValue.usersList.users]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(stateValue.form.values);
  };

  const onInputChange = (evt, id: string) => {
    dispatch(updateFormInput(evt.target.value, id));
  };

  const unblockFormFields = () => {
    dispatch(unblockForm());
  };

  if (info) {
    return (
      <Form onSubmit={onSubmit} onEditButtonClick={unblockFormFields}>
        <Input
          id="name"
          type="text"
          defaultValue={info.name}
          text="Name"
          readonly={stateValue.form.readonly}
          onInputChange={(evt) => onInputChange(evt, 'name')}
        />
        <Input
          id="username"
          type="text"
          defaultValue={info.name}
          text="User name"
          readonly={stateValue.form.readonly}
          onInputChange={(evt) => onInputChange(evt, 'userName')}
        />
        <Input
          id="email"
          type="email"
          defaultValue={info.email}
          text="E-mail"
          readonly={stateValue.form.readonly}
          onInputChange={(evt) => onInputChange(evt, 'email')}
        />
        <Input
          id="street"
          type="text"
          defaultValue={info.street}
          text="Street"
          readonly={stateValue.form.readonly}
          onInputChange={(evt) => onInputChange(evt, 'street')}
        />
        <Input
          id="city"
          type="text"
          defaultValue={info.city}
          text="City"
          readonly={stateValue.form.readonly}
          onInputChange={(evt) => onInputChange(evt, 'city')}
        />
        <Input
          id="zipcode"
          type="text"
          defaultValue={info.zipcode}
          text="Zip code"
          readonly={stateValue.form.readonly}
          onInputChange={(evt) => onInputChange(evt, 'zipcode')}
        />
        <Input
          id="phone"
          type="tel"
          defaultValue={info.phone}
          text="Phone"
          readonly={stateValue.form.readonly}
          onInputChange={(evt) => onInputChange(evt, 'phone')}
        />
        <Input
          id="website"
          type="text"
          defaultValue={info.website}
          text="Website"
          readonly={stateValue.form.readonly}
          onInputChange={(evt) => onInputChange(evt, 'website')}
        />
        <TextField
          id="comment"
          text="Comment"
          readonly={stateValue.form.readonly}
          onFieldChange={(evt) => onInputChange(evt, 'comment')}
        />
      </Form>
    );
  }
  return <div className="profile-error">Пользователь не выбран...</div>;
};

export default ProfileContainer;

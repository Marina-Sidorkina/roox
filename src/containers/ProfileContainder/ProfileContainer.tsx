import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState } from '../../redux/reducers';
import Input from '../../components/Input';
import TextField from '../../components/TextField';
import { unblockForm, updateForm, updateFormInput } from '../../redux/actions/profileForm';
import Form from '../../components/Form';
import ProfileErrorMessage from '../../components/ProfileErrorMessage';

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
        userName: info.username,
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
      <Form
        onSubmit={onSubmit}
        onEditButtonClick={unblockFormFields}
        readonly={stateValue.form.readonly}
      >
        <Input
          id="name"
          type="text"
          value={stateValue.form.values.name}
          text="Name"
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, 'name')}
        />
        <Input
          id="username"
          type="text"
          value={stateValue.form.values.userName}
          text="User name"
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, 'userName')}
        />
        <Input
          id="email"
          type="email"
          value={stateValue.form.values.email}
          text="E-mail"
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, 'email')}
        />
        <Input
          id="street"
          type="text"
          value={stateValue.form.values.street}
          text="Street"
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, 'street')}
        />
        <Input
          id="city"
          type="text"
          value={stateValue.form.values.city}
          text="City"
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, 'city')}
        />
        <Input
          id="zipcode"
          type="text"
          value={stateValue.form.values.zipcode}
          text="Zip code"
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, 'zipcode')}
        />
        <Input
          id="phone"
          type="tel"
          value={stateValue.form.values.phone}
          text="Phone"
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, 'phone')}
        />
        <Input
          id="website"
          type="text"
          value={stateValue.form.values.website}
          text="Website"
          readonly={stateValue.form.readonly}
          required
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
  return <ProfileErrorMessage />;
};

export default ProfileContainer;

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState } from '../../redux/reducers';
import Input from '../../components/Input';
import TextField from '../../components/TextField';
import {
  blockForm, unblockForm, updateForm, updateFormInput,
} from '../../redux/actions/profileForm';
import Form from '../../components/Form';
import ProfileErrorMessage from '../../components/ProfileErrorMessage';
import { setFormFieldsValues } from '../../helpers';
import { ProfileFormFieldsSetting } from '../../constants';
import { loadUsersListAction } from '../../redux/actions/usersList';

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
      dispatch(updateForm(setFormFieldsValues(info)));
    }
    dispatch(blockForm());

    if (!stateValue.usersList.users.length) {
      dispatch(loadUsersListAction());
    }
  }, [stateValue.usersList.users]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(JSON.stringify(stateValue.form.values));
  };

  const onInputChange = (evt, id: string) => {
    dispatch(updateFormInput(evt.target.value, id));
  };

  const onFormFieldsUnblock = () => {
    dispatch(unblockForm());
  };

  if (info) {
    return (
      <Form
        onSubmit={onSubmit}
        onEditButtonClick={onFormFieldsUnblock}
        readonly={stateValue.form.readonly}
      >
        <Input
          id={ProfileFormFieldsSetting.name.id}
          type={ProfileFormFieldsSetting.name.type}
          value={stateValue.form.values.name}
          text={ProfileFormFieldsSetting.name.text}
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, ProfileFormFieldsSetting.name.stateValue)}
        />
        <Input
          id={ProfileFormFieldsSetting.username.id}
          type={ProfileFormFieldsSetting.username.type}
          value={stateValue.form.values.userName}
          text={ProfileFormFieldsSetting.username.text}
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, ProfileFormFieldsSetting.username.stateValue)}
        />
        <Input
          id={ProfileFormFieldsSetting.email.id}
          type={ProfileFormFieldsSetting.email.type}
          value={stateValue.form.values.email}
          text={ProfileFormFieldsSetting.email.text}
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, ProfileFormFieldsSetting.email.stateValue)}
        />
        <Input
          id={ProfileFormFieldsSetting.street.id}
          type={ProfileFormFieldsSetting.street.type}
          value={stateValue.form.values.street}
          text={ProfileFormFieldsSetting.street.text}
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, ProfileFormFieldsSetting.street.stateValue)}
        />
        <Input
          id={ProfileFormFieldsSetting.city.id}
          type={ProfileFormFieldsSetting.city.type}
          value={stateValue.form.values.city}
          text={ProfileFormFieldsSetting.city.text}
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, ProfileFormFieldsSetting.city.stateValue)}
        />
        <Input
          id={ProfileFormFieldsSetting.zipcode.id}
          type={ProfileFormFieldsSetting.zipcode.type}
          value={stateValue.form.values.zipcode}
          text={ProfileFormFieldsSetting.zipcode.text}
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, ProfileFormFieldsSetting.zipcode.stateValue)}
        />
        <Input
          id={ProfileFormFieldsSetting.phone.id}
          type={ProfileFormFieldsSetting.phone.type}
          value={stateValue.form.values.phone}
          text={ProfileFormFieldsSetting.phone.text}
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, ProfileFormFieldsSetting.phone.stateValue)}
        />
        <Input
          id={ProfileFormFieldsSetting.website.id}
          type={ProfileFormFieldsSetting.website.type}
          value={stateValue.form.values.website}
          text={ProfileFormFieldsSetting.website.text}
          readonly={stateValue.form.readonly}
          required
          onInputChange={(evt) => onInputChange(evt, ProfileFormFieldsSetting.website.stateValue)}
        />
        <TextField
          id={ProfileFormFieldsSetting.comment.id}
          text={ProfileFormFieldsSetting.comment.text}
          readonly={stateValue.form.readonly}
          onFieldChange={(evt) => onInputChange(evt, ProfileFormFieldsSetting.comment.stateValue)}
        />
      </Form>
    );
  }
  return <ProfileErrorMessage />;
};

export default ProfileContainer;

import { ProfileFormActionTypeValue } from '../../constants';

export const updateForm = (values:{
  name: string;
  userName: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  comment: string;
}) => ({
  type: ProfileFormActionTypeValue.UPDATE_FORM,
  values,
});

export const updateFormInput = (input: string, id: string) => ({
  type: ProfileFormActionTypeValue.UPDATE_FORM_INPUT,
  input,
  id,
});

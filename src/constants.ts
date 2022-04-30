export const filterButtonsData = [
  { name: 'city', label: 'по городу' },
  { name: 'company', label: 'по компании' },
];

export const FilterActionTypeValue = {
  UPDATE_FILTER_VALUE: 'FILTER_UPDATE_FILTER_VALUE',
};

export const UsersListActionTypeValue = {
  UPDATE_USERS_LIST: 'USERS_LIST_UPDATE_LIST',
  SHOW_USERS_LIST_LOADING: 'USERS_LIST_SHOW_LOADING',
  HIDE_USERS_LIST_LOADING: 'USERS_LIST_HIDE_LOADING',
  SHOW_USERS_LIST_ERROR: 'USERS_LIST_SHOW_ERROR',
  HIDE_USERS_LIST_ERROR: 'USERS_LIST_HIDE_ERROR',
};

export const ProfileFormActionTypeValue = {
  UPDATE_FORM: 'PROFILE_FORM_UPDATE_FORM',
  UPDATE_FORM_INPUT: 'PROFILE_FORM_UPDATE_FORM_INPUT',
  UNBLOCK_FORM: 'PROFILE_FORM_UNBLOCK_FORM',
  BLOCK_FORM: 'PROFILE_FORM_BLOCK_FORM',
};

export const ProfileFormFieldsSetting = {
  name: {
    id: 'name',
    text: 'Name',
    stateValue: 'name',
    type: 'text',
  },
  username: {
    id: 'username',
    text: 'User name',
    stateValue: 'userName',
    type: 'text',
  },
  email: {
    id: 'email',
    text: 'E-mail',
    stateValue: 'email',
    type: 'email',
  },
  street: {
    id: 'street',
    text: 'Street',
    stateValue: 'street',
    type: 'text',
  },
  city: {
    id: 'city',
    text: 'City',
    stateValue: 'city',
    type: 'text',
  },
  zipcode: {
    id: 'zipcode',
    text: 'Zip code',
    stateValue: 'zipcode',
    type: 'text',
  },
  phone: {
    id: 'phone',
    text: 'Phone',
    stateValue: 'phone',
    type: 'tel',
  },
  website: {
    id: 'website',
    text: 'Website',
    stateValue: 'website',
    type: 'text',
  },
  comment: {
    id: 'comment',
    text: 'Comment',
    stateValue: 'comment',
  },
};

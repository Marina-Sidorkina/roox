export const FilterValue = {
  CITY: 'city',
  COMPANY: 'company',
};

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
};

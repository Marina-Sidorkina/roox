import produce from 'immer';
import { ProfileFormActionTypeValue } from '../../constants';

interface IProfileFormStateValues {
  name: string;
  userName: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  comment: string;
}

interface IProfileFormActionType {
  type: string;
  values?: IProfileFormStateValues;
  input?: string;
  id?: string;
}

const initialState = {
  values: {
    name: '',
    userName: '',
    email: '',
    street: '',
    city: '',
    zipcode: '',
    phone: '',
    website: '',
    comment: '',
  },
  readonly: true,
};

const profileFormReducer = (
  state = initialState,
  action: IProfileFormActionType,
) => produce(state, (draft: { values: IProfileFormStateValues, readonly: boolean }) => {
  switch (action.type) {
    case ProfileFormActionTypeValue.UPDATE_FORM:
      draft.values = action.values;
      return draft;
    case ProfileFormActionTypeValue.UPDATE_FORM_INPUT:
      draft.values[action.id] = action.input;
      return draft;
    case ProfileFormActionTypeValue.UNBLOCK_FORM:
      draft.readonly = false;
      return draft;
    case ProfileFormActionTypeValue.BLOCK_FORM:
      draft.readonly = true;
      return draft;
    default:
      return state;
  }
});

export default profileFormReducer;

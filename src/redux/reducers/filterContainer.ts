import produce from 'immer';
import { FilterValue, FilterActionTypeValue } from '../../constants';

interface IFilterActionType {
  type: string,
  payload: string,
}

interface IFilterState {
  value: string
}

const initialState = {
  value: FilterValue.CITY,
};

const filterReducer = (
  state = initialState,
  action: IFilterActionType,
) => produce(state, (draft: IFilterState) => {
  switch (action.type) {
    case FilterActionTypeValue.UPDATE_FILTER_VALUE:
      draft.value = action.payload;
      return draft;
    default:
      return state;
  }
});

export default filterReducer;

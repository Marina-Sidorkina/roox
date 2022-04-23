import { FilterActionTypeValue } from '../../constants';

export const changeFilterValue = (value: string) => ({
  type: FilterActionTypeValue.UPDATE_FILTER_VALUE,
  payload: value,
});

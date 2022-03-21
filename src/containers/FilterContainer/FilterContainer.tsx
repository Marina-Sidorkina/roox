import * as React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilterValue } from '../../redux/actions/filterContainer';
import Filter from '../../components/Filter';
import { filterButtonsData } from '../../constants';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const buttonsValues = [...filterButtonsData];

  const buttons = buttonsValues.map(({ name, label }) => (
    <button
      type="button"
      key={name}
      onClick={() => dispatch(changeFilterValue(name))}
    >
      {label}
    </button>
  ));

  return (
    <Filter>
      {buttons}
    </Filter>
  );
};

export default FilterContainer;

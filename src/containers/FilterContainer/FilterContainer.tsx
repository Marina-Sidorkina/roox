import * as React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilterValue } from '../../redux/actions/filterContainer';
import Filter from '../../components/Filter';
import Button from '../../components/Button';
import { filterButtonsData } from '../../constants';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const buttonsValues = [...filterButtonsData];

  const buttons = buttonsValues.map(({ name, label }) => (
    <Button
      key={name}
      name={name}
      label={label}
      onButtonClick={() => dispatch(changeFilterValue(name))}
    />
  ));

  return (
    <Filter>
      {buttons}
    </Filter>
  );
};

export default FilterContainer;

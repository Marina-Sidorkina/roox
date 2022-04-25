import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeFilterValue } from '../../redux/actions/filter';
import Filter from '../../components/Filter';
import Button from '../../components/Button';
import { filterButtonsData } from '../../constants';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const buttonsValues = [...filterButtonsData];

  const buttons = buttonsValues.map(({ name, label }) => (
    <Link to="/users" key={name}>
      <Button
        name={name}
        label={label}
        onButtonClick={() => dispatch(changeFilterValue(name))}
      />
    </Link>
  ));

  return (
    <Filter>
      {buttons}
    </Filter>
  );
};

export default FilterContainer;

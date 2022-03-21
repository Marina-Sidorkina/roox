import * as React from 'react';

interface IFilterButtonProps {
  name: string;
  label: string;
  onButtonClick: Function;
}

const FilterButton = (props: IFilterButtonProps) => {
  const { name, label, onButtonClick } = props;
  return (
    <button
      type="button"
      key={name}
      onClick={() => onButtonClick()}
    >
      {label}
    </button>
  );
};

export default FilterButton;

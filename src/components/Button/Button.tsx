import * as React from 'react';
import './Buttton.scss';

interface IFilterButtonProps {
  name: string;
  label: string;
  onButtonClick: Function;
}

const Button = (props: IFilterButtonProps) => {
  const { name, label, onButtonClick } = props;
  return (
    <button
      type="button"
      className="button"
      key={name}
      onClick={() => onButtonClick()}
    >
      {label}
    </button>
  );
};

export default Button;

import * as React from 'react';
import './Submit.scss';

interface IFilterButtonProps {
  name: string;
  label: string;
  onButtonClick: Function;
}

const Submit = (props: IFilterButtonProps) => {
  const { name, label, onButtonClick } = props;
  return (
    <button
      type="submit"
      className="submit"
      key={name}
      onClick={() => onButtonClick()}
    >
      {label}
    </button>
  );
};

export default Submit;

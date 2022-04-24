import * as React from 'react';
import './Submit.scss';

interface IFilterButtonProps {
  name: string;
  label: string;
}

const Submit = (props: IFilterButtonProps) => {
  const { name, label } = props;
  return (
    <button
      type="submit"
      className="submit"
      key={name}
    >
      {label}
    </button>
  );
};

export default Submit;

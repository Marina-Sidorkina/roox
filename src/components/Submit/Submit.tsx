import * as React from 'react';
import './Submit.scss';

interface IFilterButtonProps {
  name: string;
  label: string;
  readonly: boolean;
}

const Submit = (props: IFilterButtonProps) => {
  const { name, label, readonly } = props;
  return (
    <button
      type="submit"
      className={`submit ${readonly ? '' : 'active'}`}
      key={name}
    >
      {label}
    </button>
  );
};

export default Submit;

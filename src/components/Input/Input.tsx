import * as React from 'react';
import './Input.scss';

interface IFilterButtonProps {
  id: string;
  type: string;
  defaultValue: string;
  text: string;
  onInputChange: Function;
}

const Input = (props: IFilterButtonProps) => {
  const {
    id, type, defaultValue, text, onInputChange,
  } = props;
  return (
    <>
      <label className="label" htmlFor={id}>{text}</label>
      <input
        className="input"
        type={type}
        placeholder={defaultValue}
        defaultValue={defaultValue}
        id={id}
        name={id}
        onChange={(evt) => onInputChange(evt, id)}
      />
    </>
  );
};

export default Input;

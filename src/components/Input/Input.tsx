import * as React from 'react';
import './Input.scss';

interface IInputProps {
  id: string;
  type: string;
  defaultValue: string;
  text: string;
  onInputChange: Function;
  readonly: boolean;
}

const Input = (props: IInputProps) => {
  const {
    id, type, defaultValue, text, onInputChange, readonly,
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
        readOnly={readonly}
      />
    </>
  );
};

export default Input;

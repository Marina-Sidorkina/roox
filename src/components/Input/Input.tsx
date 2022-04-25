import * as React from 'react';
import './Input.scss';

interface IInputProps {
  id: string;
  type: string;
  value: string;
  text: string;
  onInputChange: Function;
  readonly: boolean;
  required: boolean;
}

const Input = (props: IInputProps) => {
  const {
    id, type, value, text, onInputChange, readonly, required,
  } = props;
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>{text}</label>
      <input
        className={`input__field ${readonly ? '' : 'active'}`}
        type={type}
        placeholder={value}
        value={value}
        id={id}
        name={id}
        onChange={(evt) => onInputChange(evt, id)}
        readOnly={readonly}
        required={required}
      />
    </div>
  );
};

export default Input;

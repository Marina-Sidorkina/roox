import * as React from 'react';
import './TextField.scss';

interface IFieldProps {
  id: string;
  text: string;
  onFieldChange: Function;
}

const TextField = (props: IFieldProps) => {
  const {
    id, text, onFieldChange,
  } = props;
  return (
    <>
      <label className="label" htmlFor={id}>{text}</label>
      <textarea
        className="text-field"
        id={id}
        name={id}
        onChange={(evt) => onFieldChange(evt, id)}
      />
    </>
  );
};

export default TextField;

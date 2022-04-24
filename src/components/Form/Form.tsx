import * as React from 'react';
import './Form.scss';
import { FormEventHandler } from 'react';
import Button from '../Button';
import Submit from '../Submit';

const Form = (
  props: {
    children: React.ReactChild | React.ReactFragment | null | undefined,
    onSubmit: FormEventHandler<HTMLFormElement>,
    onEditButtonClick: Function,
  },
) => {
  const { children, onSubmit, onEditButtonClick } = props;
  return (
    <form className="form" onSubmit={(evt) => onSubmit(evt)}>
      <div className="form__top">
        <h1 className="form__title">Профиль пользователя</h1>
        <Button
          name="edit"
          label="Редактировать"
          onButtonClick={onEditButtonClick}
        />
      </div>
      <fieldset className="form__fieldset">
        {children}
      </fieldset>
      <Submit
        name="submit"
        label="Отправить"
      />
    </form>
  );
};

export default Form;

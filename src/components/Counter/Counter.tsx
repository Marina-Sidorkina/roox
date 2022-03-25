import * as React from 'react';
import { getNounWithEnding } from '../../helpers';
import './Counter.scss';

const Counter = (props: { count: number }) => {
  const { count } = props;
  return (
    <div className="counter">
      {`Найдено ${count} ${getNounWithEnding(count)}`}
    </div>
  );
};

export default Counter;

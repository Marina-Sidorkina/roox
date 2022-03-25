import * as React from 'react';
import './Filter.scss';

const Filter = (
  props: { children: React.ReactChild | React.ReactFragment | null | undefined },
) => {
  const { children } = props;
  return (
    <div className="filter">
      <h2 className="filter__title">Сортировка</h2>
      {children}
    </div>
  );
};

export default Filter;

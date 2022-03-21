import * as React from 'react';

const Filter = (
  props: { children: React.ReactChild | React.ReactFragment | null | undefined; },
) => {
  const { children } = props;
  return (
    <div className="filter">
      {children}
    </div>
  );
};

export default Filter;

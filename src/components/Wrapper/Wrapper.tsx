import * as React from 'react';

const Wrapper = (
  props: {
    children: React.ReactChild | React.ReactFragment | null | undefined,
    clazzName: string,
  },
) => {
  const { children, clazzName } = props;
  return (
    <div className={clazzName}>
      {children}
    </div>
  );
};

export default Wrapper;

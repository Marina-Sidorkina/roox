import * as React from 'react';
import './Page.scss';

const Page = (
  props: { children: React.ReactChild | React.ReactFragment | null | undefined },
) => {
  const { children } = props;
  return (
    <div className="page">
      {children}
    </div>
  );
};

export default Page;

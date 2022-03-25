import * as React from 'react';
import './Content.scss';

const Content = (
  props: { children: React.ReactChild | React.ReactFragment | null | undefined },
) => {
  const { children } = props;
  return (
    <div className="content">
      {children}
    </div>
  );
};

export default Content;

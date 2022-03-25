import * as React from 'react';
import './Sidebar.scss';

const Sidebar = (
  props: { children: React.ReactChild | React.ReactFragment | null | undefined },
) => {
  const { children } = props;
  return (
    <div className="sidebar">
      {children}
    </div>
  );
};

export default Sidebar;

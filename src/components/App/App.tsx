import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const App = () => {
  const filter = useSelector((state: RootState) => state);
  return (
    <div className="app">
      { filter.filter.value }
    </div>
  );
};

export default App;

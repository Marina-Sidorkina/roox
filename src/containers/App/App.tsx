import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import FilterContainer from '../FilterContainer';

const App = () => {
  const filter = useSelector((state: RootState) => state);
  return (
    <div className="app">
      { filter.filter.value }
      <FilterContainer />
    </div>
  );
};

export default App;

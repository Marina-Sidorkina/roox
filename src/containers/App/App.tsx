import * as React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../redux/reducers';
import FilterContainer from '../FilterContainer';
import API from '../../services/api';

const App = () => {
  const filter = useSelector((state: RootState) => state);
  const api = new API();

  useEffect(() => {
    api.getUsersList()
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="app">
      { filter.filter.value }
      <FilterContainer />
    </div>
  );
};

export default App;

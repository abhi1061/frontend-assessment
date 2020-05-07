import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import './home.css';
import useInfiniteScroll from './useInfiniteScroll';
import SearchBox from '../SearchBox';
import CategorySelection from '../Category';
import List from '../List';
import Logo from '../Images/Logo.svg';

export default function Home(props) {
  const { fetchData } = props;
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('The'); // Initial query param as wery is required parameter
  const [category, setCategory] = useState('all');

  const fetchMoreData = () => {
    setPage((p) => p + 1);
    setIsFetching(false);
  };

  const debouncedFetchMoreData = _.debounce(fetchMoreData, 3000);
  const [isFetching, setIsFetching] = useInfiniteScroll(debouncedFetchMoreData);

  const fetchDataFromServer = () => {
    fetchData(query, page, isFetching, setState);
  };

  useEffect(() => {
    fetchDataFromServer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  function filterData(data) {
    if (category !== 'all') {
      return _.filter(data, ['type', category]);
    }
    return data;
  }

  return (
    <div className="home-container">
      <div className="card shadow banner">
        <img alt="Logo" src={Logo}></img>
      </div>
      <div className="card shadow p-4 body-card">
        <SearchBox setQuery={setQuery} />
        <CategorySelection category={category} setCategory={setCategory} />
        {state.length ? (
          <List id="list" data={filterData(state)} isFetching={isFetching} />
        ) : (
          <h6>No Data Found</h6>
        )}
      </div>
      {isFetching ? (
        <div className="loader mt-3">
          <i className="fa fa-lg fa-spinner fa-pulse"></i>
        </div>
      ) : null}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import useInfiniteScroll from './useInfiniteScroll';
import { getTrending } from '../Actions';
import './home.css';
import SearchBox from '../SearchBox';
import CategorySelection from '../Category';
import List from '../List';

export default function Home() {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('all');

  async function fetchTrending(page) {
    let response = await getTrending(page);
    setState((prevState) => [...prevState, ...response.results]);
  }

  useEffect(() => {
    fetchTrending(page);
  }, [page]);

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setPage(page + 1);
      setIsFetching(false);
    }, 2000);
  }

  function filterData() {
    if (category !== 'all') {
      return _.filter(state, ['media_type', category]);
    }
    return state;
  }

  return (
    <div className="home-container">
      <div className="card shadow banner"></div>
      <div className="card shadow p-4 body-card">
        <SearchBox />
        <CategorySelection category={category} setCategory={setCategory} />
        <List data={filterData()} />
      </div>
      {isFetching ? (
        <div className="loader mt-3">
          <i className="fa fa-lg fa-spinner fa-pulse"></i>
        </div>
      ) : null}
    </div>
  );
}

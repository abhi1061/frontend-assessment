import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { createData } from './MapData';
import useInfiniteScroll from './useInfiniteScroll';
import { getSearchResult } from '../Actions';
import './home.css';
import SearchBox from '../SearchBox';
import CategorySelection from '../Category';
import List from '../List';
import Logo from '../Images/Logo.svg';

export default function Home(props) {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('The'); // Initial query param as wery is required parameter
  const [category, setCategory] = useState('all');
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  async function fetchData(query, page) {
    if (query === '') {
      return;
    }
    let response = await getSearchResult(query, page);
    if (isFetching) {
      setState((prevState) => [...prevState, ...createData(response.results)]);
    } else {
      setState(createData(response.results));
    }
  }

  function fetchMoreListItems() {
    setTimeout(() => {
      setPage(page + 1);
      setIsFetching(false);
    }, 2000);
  }

  useEffect(() => {
    console.log('called');
    fetchData(query, page);
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
          <List id="list" data={filterData(state)} />
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

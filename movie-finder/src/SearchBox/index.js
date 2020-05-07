import React, { useState, useRef } from 'react';
import _ from 'lodash';

import './searchBox.css';

export default function SearchBar(props) {
  const { setQuery } = props;
  const [inputvalue, setInputValue] = useState('');

  const debouncedSetQueryValue = useRef(
    _.debounce((value) => setQuery(value), 2000),
  ).current;

  const handleChange = (value) => {
    setInputValue(value);
    debouncedSetQueryValue(value);
  };

  const search = () => {
    setQuery(inputvalue);
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text pre-noback">
          <i className="fa fa-xs fa-search"></i>
        </span>
      </div>
      <input
        id="search"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        className="form-control"
        placeholder="Search for movies, tv shows, people..."
        aria-label="Search for movies, tv shows, people..."
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary searchBtn"
          type="button"
          onClick={() => search()}
        >
          Search
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

import './searchBox.css';

export default function SearchBar(props) {
  const { setQuery } = props;
  const [inputvalue, setInputValue] = useState('');

  const handleChange = (value) => {
    setInputValue(value);
    setTimeout(setQuery(value), 3000);
  };

  const search = () => {
    setQuery(inputvalue);
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text pre-noback">
          <i className="fa fa-search"></i>
        </span>
      </div>
      <input
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

import React from 'react';

import './searchBox.css';

export default function SearchBar() {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text pre-noback">
          <i className="fa fa-search"></i>
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Search for movies, tv shows, people..."
        aria-label="Search for movies, tv shows, people..."
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary searchBtn" type="button">
          Search
        </button>
      </div>
    </div>
  );
}

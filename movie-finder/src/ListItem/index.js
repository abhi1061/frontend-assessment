import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import moment from 'moment';

import './listItem.css';

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
}

export default function ListItem(props) {
  const { data } = props;
  return (
    <div className="list-item-container mt-4 border-top pt-4">
      <div className="poster-container shadow mr-3">
        <img
          alt="poster"
          className="poster"
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`}
        ></img>
      </div>
      <div className="detail-container">
        <div className="name-category-container">
          <div className="name-year-container mb-2">
            <span className="name mr-2">
              {data.title ? data.title : data.name}
            </span>
            <span className="year">
              {`(` +
                moment(
                  data.release_date ? data.release_date : data.first_air_date,
                ).year() +
                `)`}
            </span>
          </div>
          <div className="category-container">
            <span className="category-badge mr-2">
              {data.media_type === 'movie'
                ? 'Movie'
                : data.media_type === 'tv'
                ? 'TV Show'
                : 'People'}
            </span>
            <span>
              {data.release_date ? 'Release Date: ' : 'First Air Date: '}
              {moment(
                data.release_date ? data.release_date : data.first_air_date,
              ).format('YYYY/MM/DD')}
            </span>
          </div>
        </div>
        <div className="desc-container pt-3">
          <p>{truncate(data.overview, 500)}</p>
        </div>
        <div className="rating-action-container">
          <div className="rate-container">
            <span>
              User Rating:{' '}
              <span className="user-rating">{`${
                data.vote_average * 10
              }%`}</span>
            </span>
            <ProgressBar
              now={data.vote_average * 10}
              className="w-100 custom-progress-bar"
            />
          </div>
          <div className="btn btn-success btn-sm pl-3 pr-3">
            <i className="fa fa-play mr-2"></i>
            Play Trailer
          </div>
        </div>
      </div>
    </div>
  );
}

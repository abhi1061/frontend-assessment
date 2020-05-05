import React from 'react';
import moment from 'moment';

export default function Detail(props) {
  const { data } = props;
  return (
    <div className="name-category-container">
      <div className="name-year-container mb-2">
        <span className="name mr-2">{data.title ? data.title : data.name}</span>
        {data.media_type !== 'person' ? (
          <span className="year">
            {`(` +
              moment(
                data.release_date ? data.release_date : data.first_air_date,
              ).year() +
              `)`}
          </span>
        ) : null}
      </div>
      <div className="category-container">
        <span className="category-badge mr-2">
          {data.media_type === 'movie'
            ? 'Movie'
            : data.media_type === 'tv'
            ? 'TV Show'
            : data.media_type === 'person'
            ? 'People'
            : ''}
        </span>
        {data.media_type !== 'person' ? (
          <span>
            {data.release_date ? 'Release Date: ' : 'First Air Date: '}
            {moment(
              data.release_date ? data.release_date : data.first_air_date,
            ).format('YYYY/MM/DD')}
          </span>
        ) : (
          <span>Gender: {data.gender === 1 ? 'Female' : 'Male'}</span>
        )}
      </div>
    </div>
  );
}

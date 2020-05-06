import React from 'react';

export default function Detail(props) {
  const { data } = props;
  return (
    <div className="name-category-container">
      <div className="name-year-container mb-2">
        <span className="name mr-2">{data.title}</span>
        {data.type !== 'person' ? (
          <span className="year">{`(${data.year})`}</span>
        ) : null}
      </div>
      <div className="category-container">
        <span className="category-badge mr-2">{data.typeName}</span>
        {data.type !== 'person' ? (
          <span>
            {data.releaseDate ? 'Release Date: ' : 'First Air Date: '}
            {data.releaseDate ? data.releaseDate : data.firstAirDate}
          </span>
        ) : (
          <span>Gender: {data.gender}</span>
        )}
      </div>
    </div>
  );
}

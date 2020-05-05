import React from 'react';

import Poster from './Poster';
import Detail from './Detail';
import Rating from './Rating';
import Trailer from './Trailer';
import './listItem.css';

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
}

const posterData = (data) => {
  if (data && data.media_type === 'person') {
    return data.profile_path;
  } else {
    return data.poster_path;
  }
};

export default function ListItem(props) {
  const { data } = props;
  return (
    <div className="list-item-container mt-4 border-top pt-4">
      <div className="poster-container shadow mr-3">
        <Poster imagePath={posterData(data)} />
      </div>
      <div className="detail-container">
        <Detail data={data} />
        <div className="desc-container pt-3">
          <p>
            {data.overview
              ? truncate(data.overview, 500)
              : data.known_for && data.known_for.length
              ? truncate(data.known_for[0].overview, 500)
              : ''}
          </p>
        </div>
        {data.media_type !== 'person' ? (
          <div className="rating-trailer-container">
            <Rating vote={data.vote_average} />
            <Trailer id={data.id} mediatype={data.media_type} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

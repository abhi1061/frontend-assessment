import React from 'react';

import Poster from '../Poster';
import Detail from '../Detail';
import Rating from '../Rating';
import Trailer from '../Trailer';
import './listItem.css';

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
}

export default function ListItem(props) {
  const { data } = props;

  return (
    <div className="list-item-container mt-4 border-top pt-4">
      <div className="poster-container shadow mr-3">
        <Poster imagePath={data.poster} />
      </div>
      <div className="detail-container">
        <Detail data={data} />
        <div className="desc-container pt-3">
          <p>{truncate(data.overview, 500)}</p>
        </div>
        {data.type !== 'person' ? (
          <div className="rating-trailer-container">
            <Rating rating={data.rating} />
            <Trailer id={data.id} mediatype={data.type} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

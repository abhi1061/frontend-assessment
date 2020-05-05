import React from 'react';

export default function Poster(props) {
  const { imagePath } = props;
  return (
    <img
      alt="poster"
      className="poster"
      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${imagePath}`}
    ></img>
  );
}

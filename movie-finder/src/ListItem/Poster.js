import React from 'react';
import defaultImage from './default.jpg';

export default function Poster(props) {
  const { imagePath } = props;
  return (
    <img
      alt="poster"
      className="poster"
      src={
        imagePath
          ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${imagePath}`
          : defaultImage
      }
    ></img>
  );
}

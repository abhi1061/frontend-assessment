/* eslint-disable */

import React from 'react';
import defaultImage from '../Images/def.jpg';

export default function Poster(props) {
  const { imagePath } = props;
  return (
    <img
      alt="poster"
      className="poster shadow"
      src={
        imagePath
          ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${imagePath}`
          : defaultImage
      }
    />
  );
}

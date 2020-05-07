/* eslint-disable */

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import defaultImage from '../Images/def.jpg';

export default function Poster(props) {
  const { imagePath } = props;
  return (
    <LazyLoadImage
      threshold={100}
      alt="poster"
      effect="opacity"
      className="poster shadow"
      src={
        imagePath
          ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${imagePath}`
          : defaultImage
      }
    />
  );
}

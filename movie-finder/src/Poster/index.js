import React from 'react';
import LazyLoad from 'react-lazy-load';
import defaultImage from '../Images/def.jpg';

export default function Poster(props) {
  const { imagePath } = props;
  return (
    <LazyLoad className="poster" debounce={false} offsetVertical={500}>
      <img
        alt="poster"
        className="poster"
        src={
          imagePath
            ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${imagePath}`
            : defaultImage
        }
      />
    </LazyLoad>
  );
}

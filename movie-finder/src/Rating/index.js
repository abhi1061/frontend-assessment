import React from 'react';

export default function Rating(props) {
  const { rating } = props;

  const renderRatingClass = (rating) => {
    if (rating <= 20) {
      return 'progress-bar-poor';
    } else if (rating >= 20 && rating <= 50) {
      return 'progress-bar-average';
    } else {
      return 'progress-bar';
    }
  };
  return (
    <div className="rate-container">
      <span>
        User Rating:{' '}
        <span className="user-rating">
          {rating > 0 ? `${rating}%` : 'Not Rated'}
        </span>
      </span>
      <div className="progress custom-progress-bar  w-100">
        <div
          className={renderRatingClass(rating)}
          style={{ width: `${rating}%` }}
        ></div>
      </div>
    </div>
  );
}

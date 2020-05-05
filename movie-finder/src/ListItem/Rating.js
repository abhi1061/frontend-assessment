import React from 'react';

export default function Rating(props) {
  const { vote } = props;

  const renderRatingColor = (rating) => {
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
          {vote > 0 ? `${vote * 10}%` : 'Not Rated'}
        </span>
      </span>
      <div className="progress custom-progress-bar  w-100">
        <div
          className={renderRatingColor(vote * 10)}
          style={{ width: `${vote * 10}%` }}
        ></div>
      </div>
    </div>
  );
}

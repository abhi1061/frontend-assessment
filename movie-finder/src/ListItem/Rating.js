import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function Rating(props) {
  const { vote } = props;
  return (
    <div className="rate-container">
      <span>
        User Rating: <span className="user-rating">{`${vote * 10}%`}</span>
      </span>
      <ProgressBar now={vote * 10} className="w-100 custom-progress-bar" />
    </div>
  );
}

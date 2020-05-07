import React from 'react';

import './category.css';
import { filterCategory } from '../Actions/constants';

export default function CategorySelection(props) {
  const { category, setCategory } = props;

  function getClassName(mediaType) {
    if (category === mediaType) {
      return 'btn btn-outline-secondary btn-sm mr-3 pr-3 pl-3 selected';
    }
    return 'btn btn-outline-secondary btn-sm mr-3 pr-3 pl-3';
  }

  return (
    <div className="mb-3">
      {filterCategory.map((item) => (
        <button
          key={item.id}
          type="button"
          className={getClassName(item.mediaType)}
          onClick={() => setCategory(item.mediaType)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

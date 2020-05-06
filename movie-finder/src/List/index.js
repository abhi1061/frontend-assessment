import React from 'react';
import { v4 } from 'uuid';

import ListItem from '../ListItem';

export default function List(props) {
  const { data, isFetching } = props;
  return (
    <div>
      {data.map((item) => (
        <ListItem
          data={item}
          key={`${item.id}${v4()}`}
          isFetching={isFetching}
        />
      ))}
    </div>
  );
}

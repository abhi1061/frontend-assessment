import React from 'react';

import ListItem from '../ListItem';

export default function List(props) {
  const { data } = props;
  return (
    <div>
      {data.map((item) => (
        <ListItem data={item} key={item.id} />
      ))}
    </div>
  );
}

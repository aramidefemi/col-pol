import React from 'react';

const FlatList = ({ data, Child, props }) => {
  return (
    <>
      {data.map((items, i) => (
        <Child key={i} {...items} {...props} />
      ))}
    </>
  );
};

export default FlatList;

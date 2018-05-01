import React from 'react';

const Patron = ({ patron }) => {
  return(
  <div>&#10003; {patron.first_name} {patron.last_name}</div>
  )
};

export default Patron;

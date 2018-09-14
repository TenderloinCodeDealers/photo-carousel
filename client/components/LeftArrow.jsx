import React from 'react';

const LeftArrow = props => (
  <div onClick={props.handleLeftClick}>
    <i className="fas fa-chevron-circle-left fa-5x" />
  </div>
);

export default LeftArrow;

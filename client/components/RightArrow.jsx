import React from 'react';

const RightArrow = props => (
  <div onClick={props.handleRightClick}>
    <i className="fas fa-chevron-circle-right fa-5x" />
  </div>
);

export default RightArrow;

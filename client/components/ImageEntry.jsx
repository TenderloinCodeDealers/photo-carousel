import React from 'react';

const ImageEntry = props => (
  <div>
    <img src={props.image.image} alt={props.image.id} />
  </div>
);

export default ImageEntry;

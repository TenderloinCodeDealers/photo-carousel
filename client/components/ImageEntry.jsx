import React from 'react';
import styles from '../styles/ImageEntry.css';

const ImageEntry = props => (
  <div
    onClick={() => props.handlePreviewClick(props.index)}
    className={props.primaryIndex === props.index ? styles.selected : styles.container}
  >
    {props.image.image.includes('youtube') ? (
      <iframe width="100" height="56" src={props.image.image} frameBorder="0" allowFullScreen />
    ) : (
      <img src={props.image.image} alt={props.image.id} className={styles.preview} />
    )}
  </div>
);

export default ImageEntry;

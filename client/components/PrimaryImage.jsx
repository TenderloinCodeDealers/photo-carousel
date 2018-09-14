import React from 'react';
import styles from '../styles/PrimaryImage.css';

const PrimaryImage = props => (
  <div>
    {props.image.image.includes('youtube') ? (
      <iframe width="640" height="360" src={props.image.image} frameBorder="0" allowFullScreen />
    ) : (
      <img src={props.image.image} alt={props.image.id} className={styles.current} />
    )}
  </div>
);

export default PrimaryImage;

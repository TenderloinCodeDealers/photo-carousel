import React from 'react';
import styles from '../styles/PrimaryImage.css';

const PrimaryImage = props => (
  <div>
    {props.image.image.includes('youtube') ? (
      <div className={styles.wrapper}>
        <div className={styles.videoResponsive}>
          <iframe
            title="Sample embed video"
            width="50%"
            height="auto"
            allow="autoplay; encrypted-media"
            src={props.image.image}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    ) : (
      <img src={props.image.image} alt={props.image.id} className={styles.current} />
    )}
  </div>
);

export default PrimaryImage;

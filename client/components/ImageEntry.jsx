import React from 'react';
import classNames from 'classnames';
import { Spring, animated } from 'react-spring';
import styles from '../styles/ImageEntry.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const ImageEntry = props => {
  const classPreview = classNames(styles.container, {
    [styles.selected]: props.primaryIndex === props.index
  });

  const thumbnail = props.image.image.split('/')[4];
  return (
    <Spring
      native
      config={{ tension: 200, friction: 15 }}
      overshootClamping
      velocity={1}
      from={{ outlineWidth: '0px' }}
      to={{ outlineWidth: '3px' }}
      reset
    >
      {springStyle => (
        <animated.div
          style={springStyle}
          onClick={() => props.handlePreviewClick(props.index)}
          className={classPreview}
        >
          {props.image.image.includes('youtube') ? (
            <div>
              <img
                src={`https://img.youtube.com/vi/${thumbnail}/hqdefault.jpg`}
                alt="thumbnail"
                className={styles.preview}
              />
              <span className={styles.circle}>
                <FontAwesomeIcon icon={faVideo} className={styles.camera} />
              </span>
            </div>
          ) : (
            <img src={props.image.image} alt={props.image.id} className={styles.preview} />
          )}
        </animated.div>
      )}
    </Spring>
  );
};

export default ImageEntry;

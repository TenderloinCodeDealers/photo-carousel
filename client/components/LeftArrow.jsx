import React from 'react';
import styles from '../styles/LeftArrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrow = props => (
  <div onClick={props.handleLeftClick} className={styles.container}>
    <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
  </div>
);

export default LeftArrow;
